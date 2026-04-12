import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const CONFIG_DIR = join(homedir(), '.wellplayed');
const CREDENTIALS_FILE = join(CONFIG_DIR, 'credentials.json');

interface Credentials {
  accessToken: string;
  expiresAt?: number;
}

function ensureConfigDir(): void {
  if (!existsSync(CONFIG_DIR)) {
    mkdirSync(CONFIG_DIR, { recursive: true, mode: 0o700 });
  }
}

export function saveToken(accessToken: string, expiresIn?: number): void {
  ensureConfigDir();
  const credentials: Credentials = {
    accessToken,
    expiresAt: expiresIn ? Date.now() + expiresIn * 1000 : undefined,
  };
  writeFileSync(CREDENTIALS_FILE, JSON.stringify(credentials, null, 2), { mode: 0o600 });
}

export function getToken(): string | null {
  if (!existsSync(CREDENTIALS_FILE)) {
    return null;
  }

  try {
    const raw = readFileSync(CREDENTIALS_FILE, 'utf-8');
    const credentials: Credentials = JSON.parse(raw);

    if (credentials.expiresAt && Date.now() > credentials.expiresAt) {
      return null; // Token expired
    }

    return credentials.accessToken;
  } catch {
    return null;
  }
}

export function clearToken(): void {
  if (existsSync(CREDENTIALS_FILE)) {
    unlinkSync(CREDENTIALS_FILE);
  }
}
