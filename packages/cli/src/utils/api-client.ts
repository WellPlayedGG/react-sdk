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
  /**
   * Extra HTTP headers merged onto the GraphQL request. `Content-Type` and
   * `Authorization` cannot be overridden — those are owned by this client.
   * `organization-id` set here is overridden by `organizationId` if both
   * are provided.
   */
  headers?: Record<string, string>;
}

export interface GraphqlEnvelope<T> {
  data?: T;
  errors?: Array<{ message: string; path?: ReadonlyArray<string | number>; extensions?: unknown }>;
  extensions?: unknown;
}

interface GraphqlAttempt<T> {
  statusCode: number;
  text: string;
  parsed: GraphqlEnvelope<T> | null;
}

interface AttemptParams {
  url: string;
  query: string;
  variables: Record<string, unknown> | undefined;
  accessToken: string;
  organizationId: string | undefined;
  extraHeaders: Record<string, string> | undefined;
}

async function attemptGraphqlRequest<T>(params: AttemptParams): Promise<GraphqlAttempt<T>> {
  const headers: Record<string, string> = {
    ...(params.extraHeaders ?? {}),
    'Content-Type': 'application/json',
    Authorization: `Bearer ${params.accessToken}`,
  };
  if (params.organizationId) {
    headers['organization-id'] = params.organizationId;
  }

  const { body: responseBody, statusCode } = await request(params.url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query: params.query, variables: params.variables }),
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
  const attempt = await graphqlRequestWithRefresh<T>(query, variables, options);
  return finalizeResponse<T>(attempt);
}

/**
 * Like `graphqlRequest`, but returns the full `{ data, errors, extensions }`
 * envelope without throwing on non-empty `errors[]`. Still throws on transport
 * failures (non-2xx that isn't a recoverable 401, malformed JSON) and on auth
 * problems that survive a refresh attempt.
 *
 * Use this when callers need to surface partial-data + errors together (e.g.
 * the `wellplayed graphql` CLI subcommand).
 */
export async function graphqlRequestRaw<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: GraphqlRequestOptions,
): Promise<GraphqlEnvelope<T>> {
  const attempt = await graphqlRequestWithRefresh<T>(query, variables, options);
  if (attempt.statusCode >= 400) {
    throw new Error(`GraphQL error ${attempt.statusCode}: ${attempt.text}`);
  }
  if (attempt.parsed === null) {
    throw new Error('GraphQL response was not valid JSON');
  }
  return attempt.parsed;
}

async function graphqlRequestWithRefresh<T>(
  query: string,
  variables: Record<string, unknown> | undefined,
  options: GraphqlRequestOptions | undefined,
): Promise<GraphqlAttempt<T>> {
  const creds = getCredentials();
  if (!creds) {
    throw new Error('Not authenticated. Run `wellplayed login` first.');
  }

  const send = (accessToken: string): Promise<GraphqlAttempt<T>> =>
    attemptGraphqlRequest<T>({
      url: `${getApiUrl()}graphql`,
      query,
      variables,
      accessToken,
      organizationId: options?.organizationId,
      extraHeaders: options?.headers,
    });

  const first = await send(creds.accessToken);
  if (first.statusCode !== 401) {
    return first;
  }

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
      throw new Error('Session expired. Run `wellplayed login` to re-authenticate.');
    }
    throw err;
  }

  const retry = await send(refreshed.accessToken);
  if (retry.statusCode === 401) {
    throw new Error(`GraphQL error 401: ${first.text}`);
  }
  return retry;
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
