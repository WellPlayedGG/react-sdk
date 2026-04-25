/**
 * Hydra OAuth2 endpoint and client constants for the WellPlayed CLI.
 *
 * Hardcoded — same approach as the existing API_HOSTNAME pattern. The CLI
 * authenticates directly against Hydra (RFC 8628 Device Authorization Grant);
 * no env-var indirection by design.
 */

export const HYDRA_OAUTH_URL = 'https://oauth.warrior.well-played.gg';
export const CLI_CLIENT_ID = 'wellplayed-cli';
export const DEVICE_GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:device_code';
export const REFRESH_GRANT_TYPE = 'refresh_token';

export const DEVICE_AUTH_PATH = '/oauth2/device/auth';
export const TOKEN_PATH = '/oauth2/token';
export const REVOKE_PATH = '/oauth2/revoke';

/**
 * Scopes requested by the CLI. `openid` enables an id_token; `offline_access`
 * is required for Hydra to return a refresh_token.
 */
export const CLI_SCOPES = 'openid offline_access';
