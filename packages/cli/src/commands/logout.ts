import { Command } from 'commander';
import { fetch } from 'undici';
import { log } from '../utils/logger.js';
import { clearCredentials, getCredentials } from '../auth/token-store.js';
import { CLI_CLIENT_ID, HYDRA_OAUTH_URL, REVOKE_PATH } from '../auth/hydra-config.js';

/**
 * Best-effort revocation of the refresh token at Hydra. Revoking the refresh
 * token tears down the entire grant chain. Failures are non-fatal — local
 * credentials are always cleared.
 */
async function revokeRefreshToken(refreshToken: string): Promise<void> {
  const body = new URLSearchParams({
    token: refreshToken,
    token_type_hint: 'refresh_token',
    client_id: CLI_CLIENT_ID,
  });

  const response = await fetch(`${HYDRA_OAUTH_URL}${REVOKE_PATH}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Hydra revoke failed (HTTP ${response.status}): ${text.slice(0, 200)}`);
  }
}

export const logoutCommand = new Command('logout')
  .description('Revoke your WellPlayed credentials and clear the local session')
  .action(async () => {
    const creds = getCredentials();

    if (!creds) {
      log.info('No active session — nothing to do.');
      return;
    }

    log.step(1, 'Revoking refresh token at Hydra...');
    try {
      await revokeRefreshToken(creds.refreshToken);
    } catch (err) {
      log.warn(
        `Could not revoke remotely: ${err instanceof Error ? err.message : String(err)}`,
      );
      log.warn('Local credentials will still be cleared.');
    }

    clearCredentials();
    log.success('Logged out.');
  });
