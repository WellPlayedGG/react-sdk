#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { loginCommand } from './commands/login.js';
import { devCommand } from './commands/dev.js';
import { deployCommand } from './commands/deploy.js';
import { installSkillsCommand } from './commands/install-skills.js';
import { createAppCommand } from './commands/create-app.js';

const program = new Command();

program
  .name('wellplayed')
  .description('WellPlayed Developer CLI - Create, develop, and deploy marketplace apps')
  .version('0.2.0');

program.addCommand(initCommand);
program.addCommand(loginCommand);
program.addCommand(devCommand);
program.addCommand(deployCommand);
program.addCommand(installSkillsCommand);
program.addCommand(createAppCommand);

program.parse();
