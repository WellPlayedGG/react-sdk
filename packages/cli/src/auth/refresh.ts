import { fetch } from 'undici';
import {
  CLI_CLIENT_ID,
  HYDRA_OAUTH_URL,
  REFRESH_GRANT_TYPE,
  TOKEN_PATH,
} from './hydra-config.js';
import type { HydraTokenResponse } from './device-flow.js';

/* ------------------------------------------------------------------ */
/* Type guards                                                         */
/* ------------------------------------------------------------------ */

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isRefreshTokenJson(value: unknown): value is {
  access_token: string;
  refresh_token: string;
  id_token?: string;
  expires_in: number;
  scope: string;
  token_type: string;
} {
  if (!isObject(value)) return false;
  return (
    typeof value.access_token === 'string' &&
    typeof value.refresh_token === 'string' &&
    (value.id_token === undefined || typeof value.id_token === 'string') &&
    typeof value.expires_in === 'number' &&
    typeof value.scope === 'string' &&
    typeof value.token_type === 'string'
  );
}

function isOAuthErrorJson(value: unknown): value is {
  error: string;
  error_description?: string;
} {
  if (!isObject(value)) return false;
  return (
    typeof value.error === 'string' &&
    (value.error_description === undefined || typeof value.error_description === 'string')
  );
}

/**
 * Thrown when Hydra rejects the refresh token (revoked, expired, mismatched
 * client). Caller must clear stored credentials and prompt the user to
 * re-authenticate.
 */
export class RefreshTokenInvalidError extends Error {
  constructor(public readonly oauthError: string, description?: string) {
    super(
      `Refresh token rejected by Hydra: ${oauthError}${description ? ` — ${description}` : ''}`,
    );
    this.name = 'RefreshTokenInvalidError';
  }
}

/**
 * Exchange a refresh token for a fresh access (and rotated refresh) token.
 * Hydra is configured to rotate refresh tokens, so callers MUST persist the
 * full new pair returned here.
 */
export async function refreshAccessToken(refreshToken: string): Promise<HydraTokenResponse> {
  const body = new URLSearchParams({
    grant_type: REFRESH_GRANT_TYPE,
    client_id: CLI_CLIENT_ID,
    refresh_token: refreshToken,
  });

  const response = await fetch(`${HYDRA_OAUTH_URL}${TOKEN_PATH}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  const text = await response.text();
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error(
      `Hydra token endpoint returned non-JSON response (HTTP ${response.status}): ${text.slice(0, 200)}`,
    );
  }

  if (!response.ok) {
    if (isOAuthErrorJson(parsed)) {
      // invalid_grant / invalid_client / etc → caller treats as "must relogin".
      throw new RefreshTokenInvalidError(parsed.error, parsed.error_description);
    }
    throw new Error(
      `Hydra refresh failed (HTTP ${response.status}) with unexpected body: ${text.slice(0, 200)}`,
    );
  }

  if (!isRefreshTokenJson(parsed)) {
    throw new Error('Hydra refresh response had an unexpected JSON shape');
  }

  return {
    accessToken: parsed.access_token,
    refreshToken: parsed.refresh_token,
    idToken: parsed.id_token,
    expiresIn: parsed.expires_in,
    scope: parsed.scope,
    tokenType: parsed.token_type,
  };
}
