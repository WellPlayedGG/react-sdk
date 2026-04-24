import { Command } from 'commander';
import inquirer from 'inquirer';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { log } from '../utils/logger.js';
import { getToken } from '../auth/token-store.js';
import {
  createOrganizationApp,
  listUserOrganizations,
  type UserOrganization,
} from './create-app/oauth-app.js';
import { npmInstall, npmInstallPackages, scaffoldVite } from './create-app/scaffold-vite.js';
import { writeWiring } from './create-app/write-wiring.js';
import { installSkills } from './install-skills-core.js';

type Framework = 'vite-react';
const SUPPORTED_FRAMEWORKS: readonly Framework[] = ['vite-react'] as const;

const isFramework = (v: string): v is Framework =>
  (SUPPORTED_FRAMEWORKS as readonly string[]).includes(v);

interface CreateAppOptions {
  framework?: string;
  port?: string;
  org?: string;
}

function fail(message: string, hint?: string): never {
  log.error(message);
  if (hint) log.info(hint);
  process.exit(1);
}

async function resolveOrganizationId(explicit: string | undefined): Promise<string> {
  const orgs = await listUserOrganizations();
  if (orgs.length === 0) {
    fail(
      'You have no organizations yet.',
      'Create an organization at https://console.well-played.gg first, then re-run this command.',
    );
  }
  if (explicit) {
    const match = orgs.find((o: UserOrganization) => o.id === explicit);
    if (!match) {
      fail(
        `Organization "${explicit}" not found among your organizations.`,
        `Available: ${orgs.map((o) => `${o.name} (${o.id})`).join(', ')}`,
      );
    }
    return match.id;
  }
  if (orgs.length === 1) {
    log.info(`Using organization: ${orgs[0]!.name} (${orgs[0]!.id})`);
    return orgs[0]!.id;
  }
  const { organizationId } = await inquirer.prompt<{ organizationId: string }>([
    {
      type: 'list',
      name: 'organizationId',
      message: 'Select an organization:',
      choices: orgs.map((o: UserOrganization) => ({ name: `${o.name} (${o.id})`, value: o.id })),
    },
  ]);
  return organizationId;
}

function parsePort(raw: string | undefined): number {
  if (!raw) return 5173;
  const port = Number.parseInt(raw, 10);
  if (!Number.isFinite(port) || port <= 0 || port > 65535) {
    fail(`Invalid --port "${raw}". Must be an integer between 1 and 65535.`);
  }
  return port;
}

async function resolveFramework(explicit: string | undefined): Promise<Framework> {
  if (explicit) {
    if (isFramework(explicit)) return explicit;
    fail(`Unsupported framework "${explicit}". Supported: ${SUPPORTED_FRAMEWORKS.join(', ')}`);
  }
  const { framework } = await inquirer.prompt<{ framework: Framework }>([
    {
      type: 'list',
      name: 'framework',
      message: 'Framework:',
      choices: SUPPORTED_FRAMEWORKS.map((f) => ({ name: f, value: f })),
      default: 'vite-react',
    },
  ]);
  return framework;
}

async function resolveAppName(arg: string | undefined): Promise<string> {
  const { name } = await inquirer.prompt<{ name: string }>([
    {
      type: 'input',
      name: 'name',
      message: 'App name:',
      default: arg ?? 'my-wp-app',
      validate: (v: string) =>
        /^[a-z0-9][a-z0-9-]*$/.test(v) || 'Lowercase letters, digits and hyphens only',
    },
  ]);
  return name;
}

export const createAppCommand = new Command('create-app')
  .description('Create a new WellPlayed-powered frontend app (OAuth app + scaffolded project)')
  .argument('[name]', 'App / project directory name')
  .option('--framework <framework>', `Framework to scaffold (${SUPPORTED_FRAMEWORKS.join(', ')})`)
  .option('--port <port>', 'Local dev port used for redirect URIs', '5173')
  .option('--org <shortId>', 'Organization short-id to create the app in (skips prompt)')
  .action(async (nameArg: string | undefined, opts: CreateAppOptions) => {
    try {
      if (!getToken()) fail('Not authenticated.', 'Run `wellplayed login` first.');

      const name = await resolveAppName(nameArg);
      const targetDir = resolve(process.cwd(), name);
      if (existsSync(targetDir)) fail(`Directory ${name} already exists`);

      const organizationShortId = await resolveOrganizationId(opts.org);
      // Open/Closed: add new frameworks via SUPPORTED_FRAMEWORKS + a scaffolder.
      // `resolveFramework` already throws for anything outside SUPPORTED_FRAMEWORKS,
      // so no extra check is needed here.
      await resolveFramework(opts.framework);

      const port = parsePort(opts.port);
      const redirectUri = `http://localhost:${port}/auth/callback`;
      const logoutRedirect = `http://localhost:${port}/`;

      // Scaffold locally first — disk/npm/node failures are the most likely
      // failure mode. Delaying the remote OAuth-app mutation until after local
      // success eliminates zombie apps in the org.
      log.step(1, 'Scaffolding Vite + React + TS project...');
      await scaffoldVite(name, process.cwd());

      log.step(2, 'Installing base dependencies...');
      await npmInstall(targetDir);

      log.step(3, 'Installing @well-played.gg SDK packages...');
      await npmInstallPackages(
        [
          '@well-played.gg/react-sdk',
          '@well-played.gg/typescript-sdk',
          '@apollo/client',
          'graphql',
          '@axa-fr/react-oidc',
        ],
        targetDir,
      );

      log.step(4, 'Creating OAuth application...');
      let clientId: string;
      try {
        const app = await createOrganizationApp(
          {
            name,
            description: 'Created by @well-played.gg/cli',
            redirectUrls: [redirectUri],
            logoutRedirectUrls: [logoutRedirect],
            loginUrl: logoutRedirect,
            consentUrl: `http://localhost:${port}/consent`,
            requiresConsent: false,
            public: true,
          },
          organizationShortId,
        );
        // OrganizationApp.id IS the OAuth2 client ID (per schema comment).
        clientId = app.id;
        log.success(`Created app "${app.name}" (clientId: ${clientId})`);
      } catch (error) {
        log.error(
          `Failed to create OAuth application: ${error instanceof Error ? error.message : String(error)}`,
        );
        log.info(
          `The local project at ${targetDir} was scaffolded successfully. You can retry by re-running \`wellplayed create-app\` in a fresh directory, or remove this one with \`rm -rf ${targetDir}\`.`,
        );
        process.exit(1);
      }

      log.step(5, 'Wiring up WellPlayedProvider, App and Callback...');
      await writeWiring({ projectDir: targetDir, organizationShortId, clientId, port });

      log.step(6, 'Installing Claude Code skills...');
      const skillsResult = await installSkills(targetDir);
      if (skillsResult.copiedCount === 0) {
        log.warn('No WellPlayed SDK skills found in node_modules — continuing without skill bundles.');
      } else {
        log.info(`Installed ${skillsResult.copiedCount} skill(s) into ${skillsResult.claudeSkillsDir}`);
      }

      log.success(`App "${name}" created at ./${name}`);
      log.info('Next steps:');
      log.info(`  cd ${name}`);
      log.info('  claude          # open Claude Code with the installed skills');
      log.info('  # or:');
      log.info('  npm run dev     # start the Vite dev server');
      log.info('');
      log.info(`Redirect URI registered: ${redirectUri}`);
      log.info(`Env file written: ${join(targetDir, '.env.local')}`);
    } catch (error) {
      log.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });
