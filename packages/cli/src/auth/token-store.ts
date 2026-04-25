import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const CONFIG_DIR = join(homedir(), '.wellplayed');
const CREDENTIALS_FILE = join(CONFIG_DIR, 'credentials.json');

/** Skew applied when checking access-token expiry, in milliseconds. */
const EXPIRY_SKEW_MS = 30_000;

/**
 * Credentials persisted on disk after a successful login or refresh.
 *
 * `expiresAt` is the absolute epoch-ms moment at which the access token stops
 * being valid. The refresh token's lifetime is governed by Hydra and is not
 * tracked locally — we just attempt a refresh and let Hydra decide.
 */
export interface StoredCredentials {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

function ensureConfigDir(): void {
  if (!existsSync(CONFIG_DIR)) {
    mkdirSync(CONFIG_DIR, { recursive: true, mode: 0o700 });
  }
}

function isStoredCredentials(value: unknown): value is StoredCredentials {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.accessToken === 'string' &&
    typeof v.refreshToken === 'string' &&
    typeof v.expiresAt === 'number'
  );
}

/** Persist credentials with mode 0o600. Overwrites any existing file. */
export function saveCredentials(creds: StoredCredentials): void {
  ensureConfigDir();
  writeFileSync(CREDENTIALS_FILE, JSON.stringify(creds, null, 2), { mode: 0o600 });
}

/**
 * Read stored credentials. Does NOT check expiry — callers decide whether to
 * refresh based on `expiresAt`.
 */
export function getCredentials(): StoredCredentials | null {
  if (!existsSync(CREDENTIALS_FILE)) return null;

  try {
    const raw = readFileSync(CREDENTIALS_FILE, 'utf-8');
    const parsed: unknown = JSON.parse(raw);
    if (!isStoredCredentials(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Delete the credentials file if present. */
export function clearCredentials(): void {
  if (existsSync(CREDENTIALS_FILE)) {
    unlinkSync(CREDENTIALS_FILE);
  }
}

/**
 * Backward-compat helper for call sites that don't want to manage refresh.
 * Returns the access token if stored AND not expired (within a 30s skew).
 */
export function getToken(): string | null {
  const creds = getCredentials();
  if (!creds) return null;
  if (Date.now() + EXPIRY_SKEW_MS >= creds.expiresAt) return null;
  return creds.accessToken;
}
