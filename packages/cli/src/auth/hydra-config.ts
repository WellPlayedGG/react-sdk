/**
 * Hydra OAuth2 endpoint and client constants for the WellPlayed CLI.
 *
 * Hardcoded — same approach as the existing API_HOSTNAME pattern. The CLI
 * authenticates directly against Hydra (RFC 6749 Authorization Code Grant +
 * RFC 7636 PKCE + RFC 8252 loopback redirect); no env-var indirection by
 * design.
 */

export const HYDRA_OAUTH_URL = 'https://oauth.warrior.well-played.gg';
export const CLI_CLIENT_ID = 'wellplayed-cli';
export const AUTH_CODE_GRANT_TYPE = 'authorization_code';
export const REFRESH_GRANT_TYPE = 'refresh_token';

export const TOKEN_PATH = '/oauth2/token';
export const REVOKE_PATH = '/oauth2/revoke';
export const CALLBACK_PATH = '/callback';

/**
 * Loopback host used for the local OAuth redirect listener. RFC 8252 §7.3
 * mandates 127.0.0.1 / [::1] (NOT `localhost`) because the latter can resolve
 * to non-loopback addresses on misconfigured systems.
 */
export const LOOPBACK_HOST = '127.0.0.1';

/**
 * Scopes requested by the CLI. `openid` enables an id_token; `offline_access`
 * is required for Hydra to return a refresh_token.
 */
export const CLI_SCOPES = 'openid offline_access';
