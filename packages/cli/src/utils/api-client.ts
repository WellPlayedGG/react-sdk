import { request } from 'undici';
import {
  clearCredentials,
  getCredentials,
  saveCredentials,
  type StoredCredentials,
} from '../auth/token-store.js';
import { refreshAccessToken, RefreshTokenInvalidError } from '../auth/refresh.js';

const DEFAULT_API_URL = 'https://api.warrior.well-played.gg/';

function getApiUrl(): string {
  return process.env.WELLPLAYED_API_URL ?? DEFAULT_API_URL;
}

export interface GraphqlRequestOptions {
  /**
   * Organization short-id. Set when the operation requires an organization
   * context (e.g. any mutation/query not decorated with `@WithoutOrganization`).
   */
  organizationId?: string;
}

interface GraphqlEnvelope<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

interface GraphqlAttempt<T> {
  statusCode: number;
  text: string;
  parsed: GraphqlEnvelope<T> | null;
}

async function attemptGraphqlRequest<T>(
  url: string,
  query: string,
  variables: Record<string, unknown> | undefined,
  accessToken: string,
  organizationId: string | undefined,
): Promise<GraphqlAttempt<T>> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };
  if (organizationId) {
    headers['organization-id'] = organizationId;
  }

  const { body: responseBody, statusCode } = await request(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const text = await responseBody.text();
  let parsed: GraphqlEnvelope<T> | null = null;
  try {
    parsed = JSON.parse(text) as GraphqlEnvelope<T>;
  } catch {
    parsed = null;
  }
  return { statusCode, text, parsed };
}

/**
 * Issue a GraphQL request with automatic access-token refresh on 401.
 *
 * Flow:
 * 1. Send with the current access token.
 * 2. On 401, if a refresh token is available and we haven't retried yet, call
 *    `refreshAccessToken`, persist the rotated pair, and retry once.
 * 3. If the refresh itself is rejected by Hydra (invalid_grant, etc.), wipe
 *    local credentials and throw a "run `wellplayed login`" error.
 * 4. If the retried request still fails with 401, surface the original error.
 */
export async function graphqlRequest<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: GraphqlRequestOptions,
): Promise<T> {
  const creds = getCredentials();
  if (!creds) {
    throw new Error('Not authenticated. Run `wellplayed login` first.');
  }

  const url = `${getApiUrl()}graphql`;
  const orgId = options?.organizationId;

  const first = await attemptGraphqlRequest<T>(url, query, variables, creds.accessToken, orgId);

  if (first.statusCode !== 401) {
    return finalizeResponse<T>(first);
  }

  // 401 — try to refresh once.
  let refreshed: StoredCredentials;
  try {
    const tokens = await refreshAccessToken(creds.refreshToken);
    refreshed = {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      expiresAt: Date.now() + tokens.expiresIn * 1000,
    };
    saveCredentials(refreshed);
  } catch (err) {
    if (err instanceof RefreshTokenInvalidError) {
      clearCredentials();
      throw new Error(
        'Session expired. Run `wellplayed login` to re-authenticate.',
      );
    }
    throw err;
  }

  const retry = await attemptGraphqlRequest<T>(url, query, variables, refreshed.accessToken, orgId);
  if (retry.statusCode === 401) {
    throw new Error(`GraphQL error 401: ${first.text}`);
  }
  return finalizeResponse<T>(retry);
}

function finalizeResponse<T>(attempt: GraphqlAttempt<T>): T {
  if (attempt.statusCode >= 400) {
    throw new Error(`GraphQL error ${attempt.statusCode}: ${attempt.text}`);
  }
  if (attempt.parsed === null) {
    throw new Error('GraphQL response was not valid JSON');
  }
  if (attempt.parsed.errors?.length) {
    throw new Error(attempt.parsed.errors.map((e) => e.message).join('; '));
  }
  if (attempt.parsed.data === undefined || attempt.parsed.data === null) {
    throw new Error('GraphQL response missing data');
  }
  return attempt.parsed.data;
}
