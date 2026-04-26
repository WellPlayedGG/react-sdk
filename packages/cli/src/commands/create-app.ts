import { Command } from 'commander';
import inquirer from 'inquirer';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { log } from '../utils/logger.js';
import { runCommand } from '../utils/run-command.js';
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

interface StepFailure {
  step: number;
  label: string;
  message: string;
}

/**
 * Run a post-scaffold step with its own error boundary. Errors are logged and
 * recorded in `failures` but never abort the command — the user gets as much
 * of the scaffold on disk as possible (wiring, skills, `.mcp.json`) and a
 * per-step follow-up list in the end-of-run summary.
 *
 * Step 1 (`scaffoldVite`) intentionally does NOT use this — if the Vite
 * template can't be written, the remaining steps have nothing to operate on.
 */
async function runStep(
  step: number,
  label: string,
  fn: () => Promise<void>,
  failures: StepFailure[],
): Promise<boolean> {
  log.step(step, `${label}...`);
  try {
    await fn();
    return true;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    failures.push({ step, label, message });
    log.error(`Step ${step} failed (${label}): ${message}`);
    log.warn('Continuing with remaining steps.');
    return false;
  }
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
  .action((nameArg: string | undefined, opts: CreateAppOptions) =>
    runCommand(async () => {
      if (!getToken()) fail('Not authenticated.', 'Run `wellplayed login` first.');

      const name = await resolveAppName(nameArg);
      const targetDir = resolve(process.cwd(), name);
      if (existsSync(targetDir)) fail(`Directory ${name} already exists`);

      const organizationShortId = await resolveOrganizationId(opts.org);
      await resolveFramework(opts.framework);

      const port = parsePort(opts.port);
      const redirectUri = `http://localhost:${port}/auth/callback`;
      const logoutRedirect = `http://localhost:${port}/`;

      // Scaffold locally before any remote mutation: avoids creating a zombie
      // OAuth app in the org when local disk/npm fails.
      log.step(1, 'Scaffolding Vite + React + TS project...');
      await scaffoldVite(name, process.cwd());

      const PLACEHOLDER_CLIENT_ID = 'REPLACE_ME';
      const failures: StepFailure[] = [];
      let clientId: string = PLACEHOLDER_CLIENT_ID;
      let oauthAppCreated = false;

      await runStep(2, 'Installing base dependencies', () => npmInstall(targetDir), failures);

      await runStep(
        3,
        'Installing @well-played.gg SDK packages',
        () =>
          npmInstallPackages(
            [
              '@well-played.gg/react-sdk',
              '@well-played.gg/typescript-sdk',
              '@apollo/client',
              'graphql',
            ],
            targetDir,
          ),
        failures,
      );

      await runStep(
        4,
        'Creating OAuth application',
        async () => {
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
          oauthAppCreated = true;
          log.success(`Created app "${app.name}" (clientId: ${clientId})`);
        },
        failures,
      );

      // Step 5 runs even when step 4 failed: clientId falls back to
      // PLACEHOLDER_CLIENT_ID so .env.local is still useful for the user.
      const wiringOk = await runStep(
        5,
        'Wiring up WellPlayedProvider, App and Callback',
        () => writeWiring({ projectDir: targetDir, organizationShortId, clientId, port }),
        failures,
      );

      await runStep(
        6,
        'Installing Claude Code skills, .mcp.json, and CLAUDE.md',
        async () => {
          const skillsResult = await installSkills(targetDir, { claudeMdVariant: 'react' });
          if (skillsResult.copiedCount === 0) {
            log.warn(
              'No WellPlayed SDK skills found in node_modules — continuing without skill bundles.',
            );
          } else {
            log.info(
              `Installed ${skillsResult.copiedCount} skill(s) into ${skillsResult.claudeSkillsDir}`,
            );
          }
        },
        failures,
      );

      log.success(`App "${name}" created at ./${name}`);
      if (failures.length > 0) {
        log.warn('Some steps did not complete cleanly — see errors above. Follow-ups:');
        if (!oauthAppCreated) {
          log.warn('  • OAuth app: create one at https://console.well-played.gg');
          log.warn(`    - Redirect URI: ${redirectUri}`);
          log.warn(`    - Logout redirect: ${logoutRedirect}`);
          log.warn(
            `    - Then replace VITE_WP_CLIENT_ID=${PLACEHOLDER_CLIENT_ID} in ${join(targetDir, '.env.local')}`,
          );
        }
        for (const f of failures) {
          if (f.step === 4) continue;
          log.warn(`  • Retry step ${f.step} (${f.label}): ${f.message}`);
        }
      }
      log.info('Next steps:');
      log.info(`  cd ${name}`);
      log.info('  claude          # open Claude Code with the installed skills');
      log.info('  # or:');
      log.info('  npm run dev     # start the Vite dev server');
      log.info('');
      if (oauthAppCreated) log.info(`Redirect URI registered: ${redirectUri}`);
      if (wiringOk) log.info(`Env file written: ${join(targetDir, '.env.local')}`);
    }),
  );
