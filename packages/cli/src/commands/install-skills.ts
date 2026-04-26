import path from 'path';
import { Command } from 'commander';
import { installSkills } from './install-skills-core.js';
import { log } from '../utils/logger.js';

export const installSkillsCommand = new Command('install-skills')
  .description('Copy WellPlayed SDK skill bundles into .claude/skills/ and write .mcp.json if missing')
  .option('--project <path>', 'project root', process.cwd())
  .action(async (opts: { project: string }) => {
    const project = path.resolve(opts.project);
    const result = await installSkills(project);

    if (result.copiedCount === 0) {
      log.error('No skills found in node_modules. Install @well-played.gg/react-sdk or /typescript-sdk first.');
      process.exit(1);
    }

    if (result.mcpJsonWritten) {
      log.success(`wrote ${result.mcpJsonPath}`);
    } else {
      log.info('.mcp.json already exists — leaving untouched.');
      log.info(
        'To add WellPlayed, merge: { mcpServers: { wellplayed: { type: "http", url: "https://mcp.well-played.gg/mcp" } } }',
      );
    }
    if (result.claudeMdWritten) {
      log.success(`wrote ${result.claudeMdPath}`);
    } else {
      log.info('CLAUDE.md already exists — leaving untouched.');
      log.info(
        'Make sure it tells Claude to use the typed `graphql` from `@well-played.gg/typescript-sdk`, not `gql` from `graphql`/`@apollo/client`.',
      );
    }
    log.success(`installed ${result.copiedCount} skill(s) into ${result.claudeSkillsDir}`);
  });
