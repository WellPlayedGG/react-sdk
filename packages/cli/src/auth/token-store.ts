import {
  closeSync,
  existsSync,
  mkdirSync,
  openSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';

const CONFIG_DIR = join(homedir(), '.wellplayed');
const CREDENTIALS_FILE = join(CONFIG_DIR, 'credentials.json');
const LOCK_FILE = `${CREDENTIALS_FILE}.lock`;
const LOCK_STALE_MS = 30_000;
const LOCK_POLL_MS = 50;

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
  const tempFile = `${CREDENTIALS_FILE}.${process.pid}.tmp`;
  writeFileSync(tempFile, JSON.stringify(creds, null, 2), { mode: 0o600 });
  renameSync(tempFile, CREDENTIALS_FILE);
}

function tryAcquireLock(): boolean {
  try {
    closeSync(openSync(LOCK_FILE, 'wx', 0o600));
    return true;
  } catch (err) {
    if (err instanceof Error && 'code' in err && err.code === 'EEXIST') return false;
    throw err;
  }
}

function isLockStale(): boolean {
  try {
    return Date.now() - statSync(LOCK_FILE).mtimeMs > LOCK_STALE_MS;
  } catch {
    return false;
  }
}

export async function withCredentialsLock<T>(fn: () => Promise<T>): Promise<T> {
  ensureConfigDir();
  while (!tryAcquireLock()) {
    if (isLockStale()) rmSync(LOCK_FILE, { force: true });
    else await sleep(LOCK_POLL_MS);
  }
  try {
    return await fn();
  } finally {
    rmSync(LOCK_FILE, { force: true });
  }
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
  if (isCredentialsExpired(creds)) return null;
  return creds.accessToken;
}

/**
 * Returns `true` when the access token is expired or within the skew window
 * — callers should refresh before sending the request.
 */
export function isCredentialsExpired(creds: StoredCredentials): boolean {
  return Date.now() + EXPIRY_SKEW_MS >= creds.expiresAt;
}
