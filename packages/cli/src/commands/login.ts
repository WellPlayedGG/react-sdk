import { Command } from 'commander';
import { execFile } from 'node:child_process';
import { log } from '../utils/logger.js';
import { requestDeviceCode, pollDeviceToken } from '../auth/device-flow.js';
import { saveToken } from '../auth/token-store.js';

export const loginCommand = new Command('login')
  .description('Authenticate with WellPlayed via OAuth Device Flow')
  .action(async () => {
    try {
      log.info('Starting authentication...');

      const codeResponse = await requestDeviceCode();

      log.info('');
      log.info(`  Visit: ${codeResponse.verificationUri}`);
      log.info(`  Enter code: ${codeResponse.userCode}`);
      log.info('');

      // Try to open browser automatically
      const url = codeResponse.verificationUri;
      try {
        if (process.platform === 'darwin') {
          execFile('open', [url]);
        } else if (process.platform === 'win32') {
          execFile('cmd', ['/c', 'start', '', url]);
        } else {
          execFile('xdg-open', [url]);
        }
      } catch {
        // Browser open failed, user can navigate manually
      }

      log.info('Waiting for authorization...');

      const tokenResponse = await pollDeviceToken(
        codeResponse.deviceCode,
        codeResponse.interval,
        codeResponse.expiresIn,
      );

      if (tokenResponse.accessToken) {
        saveToken(tokenResponse.accessToken, tokenResponse.expiresIn);
        log.success('Logged in successfully!');
      } else {
        log.error('Authentication failed.');
        process.exit(1);
      }
    } catch (error) {
      log.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });
