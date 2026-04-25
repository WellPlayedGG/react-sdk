import { Command } from 'commander';
import { spawn, type ChildProcess } from 'node:child_process';
import { log } from '../utils/logger.js';
import { runCommand } from '../utils/run-command.js';
import { readAppConfig } from '../config/app-config.js';

export const devCommand = new Command('dev')
  .description('Start local dev server for your WellPlayed app')
  .option('-p, --port <port>', 'Port number', '3100')
  .action((options: { port: string }) =>
    runCommand(async () => {
      const config = readAppConfig();

      log.info(`Starting dev server for "${config.displayName}"...`);

      const hasExtensions = config.extensions.length > 0;
      const hasModules = config.platformModules.length > 0;

      if (!hasExtensions && !hasModules) {
        log.warn('No extensions or platform modules defined in wellplayed.json');
        return;
      }

      const port = options.port;
      const portNum = parseInt(port, 10);
      if (isNaN(portNum) || portNum < 1 || portNum > 65535) {
        throw new Error('Port must be a number between 1 and 65535');
      }

      const child: ChildProcess = spawn('npx', ['vite', '--port', String(portNum)], {
        cwd: process.cwd(),
        stdio: 'inherit',
      });

      if (hasExtensions) {
        log.info(`Extension dev server: http://localhost:${port}/extension.js`);
      }
      if (hasModules) {
        log.info(`Module dev server: http://localhost:${port}/module.js`);
      }

      log.success(`Dev server running at http://localhost:${port}`);

      process.on('SIGINT', () => {
        child.kill();
        process.exit(0);
      });
    }),
  );
