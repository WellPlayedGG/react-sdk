#!/usr/bin/env node

import { createRequire } from 'node:module';
import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { loginCommand } from './commands/login.js';
import { logoutCommand } from './commands/logout.js';
import { devCommand } from './commands/dev.js';
import { deployCommand } from './commands/deploy.js';
import { installSkillsCommand } from './commands/install-skills.js';
import { createAppCommand } from './commands/create-app.js';
import { createGraphqlCommand } from './commands/graphql.js';
import { upgradeCommand } from './commands/upgrade.js';
import { configCommand, installCommand, pinCommand } from './commands/app.js';

const { version }: { version: string } = createRequire(import.meta.url)('../package.json');

const program = new Command();

program
  .name('wellplayed')
  .description('WellPlayed Developer CLI - Create, develop, and deploy marketplace apps')
  .version(version);

program.addCommand(initCommand);
program.addCommand(loginCommand);
program.addCommand(logoutCommand);
program.addCommand(devCommand);
program.addCommand(deployCommand);
program.addCommand(installSkillsCommand);
program.addCommand(createAppCommand);
program.addCommand(upgradeCommand);
program.addCommand(createGraphqlCommand());
program.addCommand(installCommand);
program.addCommand(pinCommand);
program.addCommand(configCommand);

program.parse();
