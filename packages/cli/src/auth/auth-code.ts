import { createHash, randomBytes } from 'node:crypto';
import { execFile } from 'node:child_process';
import { createServer, type IncomingMessage, type Server, type ServerResponse } from 'node:http';
import type { AddressInfo } from 'node:net';
import { fetch } from 'undici';
import {
  AUTH_CODE_GRANT_TYPE,
  CALLBACK_PATH,
  CLI_CLIENT_ID,
  CLI_SCOPES,
  HYDRA_OAUTH_URL,
  LOOPBACK_HOST,
  TOKEN_PATH,
} from './hydra-config.js';
import { log } from '../utils/logger.js';

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

const DEFAULT_TIMEOUT_MS = 5 * 60 * 1000;

/* ------------------------------------------------------------------ */
/* Type guards — narrow JsonValue at the boundary                      */
/* ------------------------------------------------------------------ */

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
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
/* PKCE & state                                                        */
/* ------------------------------------------------------------------ */

function base64url(buffer: Buffer): string {
  return buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

interface PkcePair {
  verifier: string;
  challenge: string;
}

function generatePkce(): PkcePair {
  const verifier = base64url(randomBytes(32));
  const challenge = base64url(createHash('sha256').update(verifier).digest());
  return { verifier, challenge };
}

/* ------------------------------------------------------------------ */
/* Browser open shim                                                   */
/* ------------------------------------------------------------------ */

function openInBrowser(url: string): void {
  try {
    if (process.platform === 'darwin') execFile('open', [url]);
    else if (process.platform === 'win32') execFile('cmd', ['/c', 'start', '', url]);
    else execFile('xdg-open', [url]);
  } catch {
    // User can navigate manually using the URL printed to stdout.
  }
}

/* ------------------------------------------------------------------ */
/* Response bodies                                                     */
/* ------------------------------------------------------------------ */

function htmlPage(title: string, body: string): string {
  return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:480px;margin:80px auto;padding:0 24px;color:#222}h1{font-size:20px;margin:0 0 12px}p{line-height:1.5;color:#555}</style></head><body>${body}</body></html>`;
}

const SUCCESS_HTML = htmlPage(
  'Signed in',
  '<h1>You are signed in</h1><p>You can close this tab and return to the terminal.</p>',
);

function errorHtml(title: string, description: string): string {
  return htmlPage(title, `<h1>${title}</h1><p>${description}</p><p>You can close this tab.</p>`);
}

/* ------------------------------------------------------------------ */
/* Local callback server                                               */
/* ------------------------------------------------------------------ */

interface CallbackServer {
  redirectUri: string;
  awaitCode: Promise<string>;
  close: () => void;
}

function startCallbackServer(expectedState: string): Promise<CallbackServer> {
  return new Promise((resolveStart, rejectStart) => {
    let settled = false;
    let resolveCode!: (code: string) => void;
    let rejectCode!: (err: Error) => void;
    const awaitCode = new Promise<string>((res, rej) => {
      resolveCode = res;
      rejectCode = rej;
    });

    const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
      const outcome = classifyRequest(req, expectedState);
      if (outcome.kind === 'ignore') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not Found');
        return;
      }
      res.writeHead(outcome.status, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(outcome.body);
      if (settled) return;
      settled = true;
      if (server.listening) server.close();
      if (outcome.kind === 'ok') resolveCode(outcome.code);
      else rejectCode(outcome.error);
    });

    server.on('error', (err) => {
      if (!settled) {
        settled = true;
        rejectCode(err);
      }
      rejectStart(err);
    });

    server.listen(0, LOOPBACK_HOST, () => {
      const address = server.address();
      if (address === null || typeof address === 'string') {
        server.close();
        rejectStart(new Error('Loopback server failed to bind to a port'));
        return;
      }
      const { port } = address as AddressInfo;
      resolveStart({
        redirectUri: `http://${LOOPBACK_HOST}:${port}${CALLBACK_PATH}`,
        awaitCode,
        close: () => {
          if (!settled) {
            settled = true;
            rejectCode(new Error('Authorization aborted.'));
          }
          if (server.listening) server.close();
        },
      });
    });
  });
}

type RequestOutcome =
  | { kind: 'ignore' }
  | { kind: 'ok'; code: string; status: 200; body: string }
  | { kind: 'fail'; status: number; body: string; error: Error };

function classifyRequest(req: IncomingMessage, expectedState: string): RequestOutcome {
  const url = req.url ?? '/';
  const method = req.method ?? 'GET';
  const parsed = new URL(url, `http://${LOOPBACK_HOST}`);

  if (method !== 'GET' || parsed.pathname !== CALLBACK_PATH) return { kind: 'ignore' };

  const state = parsed.searchParams.get('state');
  const code = parsed.searchParams.get('code');
  const error = parsed.searchParams.get('error');
  const desc = parsed.searchParams.get('error_description') ?? '';

  if (state !== expectedState) {
    return {
      kind: 'fail',
      status: 400,
      body: errorHtml('State mismatch', 'Possible CSRF — login aborted.'),
      error: new Error('OAuth callback state mismatch — possible CSRF; login aborted.'),
    };
  }
  if (error !== null) {
    return {
      kind: 'fail',
      status: 400,
      body: errorHtml(`Authorization error: ${error}`, desc || 'Login aborted.'),
      error: new Error(`Authorization failed: ${error}${desc ? ` — ${desc}` : ''}`),
    };
  }
  if (code === null || code.length === 0) {
    return {
      kind: 'fail',
      status: 400,
      body: errorHtml('Missing code', 'Authorization response did not include a code.'),
      error: new Error('OAuth callback missing authorization code.'),
    };
  }
  return { kind: 'ok', code, status: 200, body: SUCCESS_HTML };
}

/* ------------------------------------------------------------------ */
/* Token exchange                                                      */
/* ------------------------------------------------------------------ */

async function exchangeCodeForTokens(
  code: string,
  verifier: string,
  redirectUri: string,
): Promise<HydraTokenResponse> {
  const body = new URLSearchParams({
    grant_type: AUTH_CODE_GRANT_TYPE,
    client_id: CLI_CLIENT_ID,
    code,
    code_verifier: verifier,
    redirect_uri: redirectUri,
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
      throw new Error(
        `Token exchange failed: ${parsed.error}${
          parsed.error_description ? ` — ${parsed.error_description}` : ''
        }`,
      );
    }
    throw new Error(
      `Hydra token endpoint returned HTTP ${response.status} with unexpected body: ${text.slice(0, 200)}`,
    );
  }

  if (!isTokenJson(parsed)) {
    throw new Error('Hydra token endpoint returned an unexpected JSON shape');
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

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

/**
 * Drives the full browser-based OAuth flow. Binds a one-shot HTTP server on
 * 127.0.0.1:<random free port>, opens the browser to Hydra's /oauth2/auth,
 * waits for the redirect carrying the auth code, exchanges it for tokens
 * via /oauth2/token. Honours an overall timeout (default 5 min).
 */
export async function authorizeWithBrowser(
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<HydraTokenResponse> {
  const { verifier, challenge } = generatePkce();
  const state = base64url(randomBytes(16));

  const server = await startCallbackServer(state);

  const authorizeUrl = new URL(`${HYDRA_OAUTH_URL}/oauth2/auth`);
  authorizeUrl.searchParams.set('client_id', CLI_CLIENT_ID);
  authorizeUrl.searchParams.set('response_type', 'code');
  authorizeUrl.searchParams.set('scope', CLI_SCOPES);
  authorizeUrl.searchParams.set('redirect_uri', server.redirectUri);
  authorizeUrl.searchParams.set('state', state);
  authorizeUrl.searchParams.set('code_challenge', challenge);
  authorizeUrl.searchParams.set('code_challenge_method', 'S256');

  const authorizeUrlString = authorizeUrl.toString();
  log.info(`If your browser does not open, visit:\n  ${authorizeUrlString}`);
  openInBrowser(authorizeUrlString);

  let timeoutHandle: NodeJS.Timeout | undefined;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutHandle = setTimeout(() => {
      reject(new Error(`Authorization timed out after ${Math.round(timeoutMs / 1000)}s.`));
    }, timeoutMs);
  });

  try {
    const code = await Promise.race([server.awaitCode, timeoutPromise]);
    return await exchangeCodeForTokens(code, verifier, server.redirectUri);
  } finally {
    if (timeoutHandle !== undefined) clearTimeout(timeoutHandle);
    server.close();
  }
}
