import { Command } from 'commander';
import { execFile } from 'node:child_process';
import { log } from '../utils/logger.js';
import { runCommand } from '../utils/run-command.js';
import { pollDeviceToken, requestDeviceCode } from '../auth/device-flow.js';
import { saveCredentials } from '../auth/token-store.js';

function openInBrowser(url: string): void {
  try {
    if (process.platform === 'darwin') {
      execFile('open', [url]);
    } else if (process.platform === 'win32') {
      execFile('cmd', ['/c', 'start', '', url]);
    } else {
      execFile('xdg-open', [url]);
    }
  } catch {
    // Browser open failed — user can navigate manually.
  }
}

export const loginCommand = new Command('login')
  .description('Authenticate with WellPlayed via OAuth 2.0 Device Flow (RFC 8628)')
  .action(() =>
    runCommand(async () => {
      log.step(1, 'Requesting device code from Hydra...');

      const codeResponse = await requestDeviceCode();

      // Prefer the one-click verification_uri_complete when Hydra provides it.
      const browserUrl = codeResponse.verificationUriComplete ?? codeResponse.verificationUri;

      log.info('');
      if (codeResponse.verificationUriComplete) {
        log.info(`  Opening: ${codeResponse.verificationUriComplete}`);
        log.info(`  (Code if prompted: ${codeResponse.userCode})`);
      } else {
        log.info(`  Visit:      ${codeResponse.verificationUri}`);
        log.info(`  Enter code: ${codeResponse.userCode}`);
      }
      log.info('');

      openInBrowser(browserUrl);

      log.step(2, 'Waiting for authorization...');

      const tokenResponse = await pollDeviceToken(
        codeResponse.deviceCode,
        codeResponse.interval,
        codeResponse.expiresIn,
      );

      saveCredentials({
        accessToken: tokenResponse.accessToken,
        refreshToken: tokenResponse.refreshToken,
        expiresAt: Date.now() + tokenResponse.expiresIn * 1000,
      });

      log.success('Logged in successfully!');
    }),
  );
