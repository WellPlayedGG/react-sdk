import { Command } from 'commander';
import { log } from '../utils/logger.js';
import { runCommand } from '../utils/run-command.js';
import { authorizeWithBrowser } from '../auth/auth-code.js';
import { HYDRA_OAUTH_URL } from '../auth/hydra-config.js';
import { saveCredentials } from '../auth/token-store.js';

export const loginCommand = new Command('login')
  .description('Authenticate with WellPlayed via OAuth 2.0 Authorization Code + PKCE')
  .action(() =>
    runCommand(async () => {
      log.info('Starting authentication...');
      log.info(`Opening browser to ${HYDRA_OAUTH_URL}/oauth2/auth ...`);

      const tokenResponse = await authorizeWithBrowser();

      saveCredentials({
        accessToken: tokenResponse.accessToken,
        refreshToken: tokenResponse.refreshToken,
        expiresAt: Date.now() + tokenResponse.expiresIn * 1000,
      });

      log.success('Logged in successfully!');
    }),
  );
