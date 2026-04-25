import { fetch } from 'undici';
import {
  CLI_CLIENT_ID,
  CLI_SCOPES,
  DEVICE_AUTH_PATH,
  DEVICE_GRANT_TYPE,
  HYDRA_OAUTH_URL,
  TOKEN_PATH,
} from './hydra-config.js';
import { sleep } from '../utils/sleep.js';

/**
 * RFC 8628 device-code response, mapped from Hydra's snake_case payload.
 */
export interface HydraDeviceCodeResponse {
  deviceCode: string;
  userCode: string;
  verificationUri: string;
  /** Hydra returns this when known. One-click activation URL. */
  verificationUriComplete?: string;
  expiresIn: number;
  interval: number;
}

/**
 * RFC 6749 token response from the Hydra token endpoint.
 */
export interface HydraTokenResponse {
  accessToken: string;
  refreshToken: string;
  idToken?: string;
  expiresIn: number;
  scope: string;
  /** Always 'bearer' from Hydra. */
  tokenType: string;
}

/**
 * RFC 8628 / RFC 6749 OAuth error codes the token endpoint may return.
 */
export type DeviceTokenErrorCode =
  | 'authorization_pending'
  | 'slow_down'
  | 'expired_token'
  | 'access_denied'
  | 'invalid_grant'
  | 'invalid_client'
  | 'invalid_request'
  | 'unauthorized_client'
  | 'unsupported_grant_type';

/* ------------------------------------------------------------------ */
/* Type guards — narrow JsonValue at the boundary, never propagate raw */
/* ------------------------------------------------------------------ */

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isDeviceCodeJson(value: unknown): value is {
  device_code: string;
  user_code: string;
  verification_uri: string;
  verification_uri_complete?: string;
  expires_in: number;
  interval: number;
} {
  if (!isObject(value)) return false;
  return (
    typeof value.device_code === 'string' &&
    typeof value.user_code === 'string' &&
    typeof value.verification_uri === 'string' &&
    (value.verification_uri_complete === undefined ||
      typeof value.verification_uri_complete === 'string') &&
    typeof value.expires_in === 'number' &&
    typeof value.interval === 'number'
  );
}

function isTokenJson(value: unknown): value is {
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

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

/**
 * Initiate the OAuth 2.0 Device Authorization Grant (RFC 8628).
 * POSTs form-encoded body to Hydra's device-auth endpoint.
 */
export async function requestDeviceCode(): Promise<HydraDeviceCodeResponse> {
  const body = new URLSearchParams({
    client_id: CLI_CLIENT_ID,
    scope: CLI_SCOPES,
  });

  const response = await fetch(`${HYDRA_OAUTH_URL}${DEVICE_AUTH_PATH}`, {
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
      `Hydra device-auth returned non-JSON response (HTTP ${response.status}): ${text.slice(0, 200)}`,
    );
  }

  if (!response.ok) {
    const errorCode = isOAuthErrorJson(parsed) ? parsed.error : `HTTP ${response.status}`;
    const description = isOAuthErrorJson(parsed) ? parsed.error_description : undefined;
    throw new Error(
      `Hydra device-auth failed: ${errorCode}${description ? ` — ${description}` : ''}`,
    );
  }

  if (!isDeviceCodeJson(parsed)) {
    throw new Error('Hydra device-auth returned an unexpected JSON shape');
  }

  return {
    deviceCode: parsed.device_code,
    userCode: parsed.user_code,
    verificationUri: parsed.verification_uri,
    verificationUriComplete: parsed.verification_uri_complete,
    expiresIn: parsed.expires_in,
    interval: parsed.interval,
  };
}

/**
 * Poll Hydra's token endpoint until the device-code is approved, denied, or expired.
 * Implements RFC 8628 polling semantics (authorization_pending, slow_down, expired_token).
 */
export async function pollDeviceToken(
  deviceCode: string,
  interval: number,
  expiresIn: number,
): Promise<HydraTokenResponse> {
  const deadline = Date.now() + expiresIn * 1000;
  let currentInterval = interval;

  while (Date.now() < deadline) {
    await sleep(currentInterval * 1000);

    const result = await pollOnce(deviceCode);
    if (result.kind === 'token') {
      return result.token;
    }

    switch (result.error) {
      case 'authorization_pending':
        // Keep polling at the same cadence.
        break;
      case 'slow_down':
        // RFC 8628 §3.5 — bump interval by 5s.
        currentInterval += 5;
        break;
      case 'expired_token':
        throw new Error('Device code expired. Please run `wellplayed login` again.');
      case 'access_denied':
        throw new Error('User denied authorization.');
      default:
        throw new Error(
          `OAuth device-flow error: ${result.error}${
            result.errorDescription ? ` — ${result.errorDescription}` : ''
          }`,
        );
    }
  }

  throw new Error('Authorization timed out. Please run `wellplayed login` again.');
}

/* ------------------------------------------------------------------ */
/* Polling helper                                                      */
/* ------------------------------------------------------------------ */

type PollOutcome =
  | { kind: 'token'; token: HydraTokenResponse }
  | { kind: 'error'; error: DeviceTokenErrorCode | string; errorDescription?: string };

async function pollOnce(deviceCode: string): Promise<PollOutcome> {
  const body = new URLSearchParams({
    grant_type: DEVICE_GRANT_TYPE,
    device_code: deviceCode,
    client_id: CLI_CLIENT_ID,
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

  if (response.ok) {
    if (!isTokenJson(parsed)) {
      throw new Error('Hydra token endpoint returned an unexpected JSON shape');
    }
    return {
      kind: 'token',
      token: {
        accessToken: parsed.access_token,
        refreshToken: parsed.refresh_token,
        idToken: parsed.id_token,
        expiresIn: parsed.expires_in,
        scope: parsed.scope,
        tokenType: parsed.token_type,
      },
    };
  }

  if (!isOAuthErrorJson(parsed)) {
    throw new Error(
      `Hydra token endpoint returned HTTP ${response.status} with unexpected body: ${text.slice(0, 200)}`,
    );
  }

  return {
    kind: 'error',
    error: parsed.error,
    errorDescription: parsed.error_description,
  };
}
