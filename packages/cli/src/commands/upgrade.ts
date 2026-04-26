import { spawn } from 'node:child_process';
import path from 'path';
import { Command } from 'commander';
import inquirer from 'inquirer';
import { runCommand } from '../utils/run-command.js';
import { log } from '../utils/logger.js';
import { installSkills, type InstallSkillsResult } from './install-skills-core.js';
import {
  type AskRewrite,
  computeNpmUpgradeCommand,
  detectClaudeMdVariant,
  findWellPlayedDeps,
  type NpmUpgradeCommand,
  resolveRewriteDecisions,
  type WellPlayedDep,
} from './upgrade/core.js';

interface UpgradeCliOptions {
  project: string;
  latest?: boolean;
  rewriteClaudeMd?: boolean;
  rewriteMcpJson?: boolean;
  yes?: boolean;
}

export interface UpgradeInputs {
  projectDir: string;
  latest: boolean;
  rewriteClaudeMdFlag?: boolean;
  rewriteMcpJsonFlag?: boolean;
  yes?: boolean;
}

export type RunNpm = (args: string[], cwd: string) => Promise<void>;

export interface UpgradePlan {
  deps: WellPlayedDep[];
  npmCommand: NpmUpgradeCommand;
}

export interface UpgradeIO {
  runNpm: RunNpm;
  ask: AskRewrite;
  isInteractive: boolean;
  onPlan?: (plan: UpgradePlan, latest: boolean) => void;
}

export interface UpgradeReport {
  deps: WellPlayedDep[];
  npmCommand: NpmUpgradeCommand;
  install: InstallSkillsResult;
  forced: { claudeMd: boolean; mcpJson: boolean };
}

export class NoWellPlayedDepsError extends Error {
  constructor(packageJsonPath: string) {
    super(`No @well-played.gg/* packages found in ${packageJsonPath}.`);
    this.name = 'NoWellPlayedDepsError';
  }
}

export async function runUpgrade(inputs: UpgradeInputs, io: UpgradeIO): Promise<UpgradeReport> {
  const deps = await findWellPlayedDeps(inputs.projectDir);
  if (deps.length === 0) {
    throw new NoWellPlayedDepsError(path.join(inputs.projectDir, 'package.json'));
  }

  const npmCommand = computeNpmUpgradeCommand(deps, inputs.latest);
  io.onPlan?.({ deps, npmCommand }, inputs.latest);
  await io.runNpm(npmCommand.args, inputs.projectDir);

  const decisions = await resolveRewriteDecisions({
    rewriteClaudeMdFlag: inputs.rewriteClaudeMdFlag,
    rewriteMcpJsonFlag: inputs.rewriteMcpJsonFlag,
    yes: inputs.yes,
    isInteractive: io.isInteractive,
    ask: io.ask,
  });

  const install = await installSkills(inputs.projectDir, {
    claudeMdVariant: detectClaudeMdVariant(deps),
    forceClaudeMd: decisions.rewriteClaudeMd,
    forceMcpJson: decisions.rewriteMcpJson,
  });

  return {
    deps,
    npmCommand,
    install,
    forced: { claudeMd: decisions.rewriteClaudeMd, mcpJson: decisions.rewriteMcpJson },
  };
}

const interactiveAsk: AskRewrite = async (file) => {
  const { rewrite } = await inquirer.prompt<{ rewrite: boolean }>([
    {
      type: 'confirm',
      name: 'rewrite',
      message: `Rewrite ${file} with the latest WellPlayed template? (your version will be replaced)`,
      default: false,
    },
  ]);
  return rewrite;
};

const spawnNpm: RunNpm = (args, cwd) =>
  new Promise((resolve, reject) => {
    const child = spawn('npm', args, {
      cwd,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`\`npm ${args.join(' ')}\` exited with code ${code ?? 'null'}`));
    });
  });

function summariseDeps(deps: WellPlayedDep[]): string {
  return deps.map((d) => `  • ${d.name} (${d.currentSpec})`).join('\n');
}

function describeNpmCommand(npmCommand: NpmUpgradeCommand, latest: boolean): string {
  const tag = latest ? 'latest (cross-major)' : 'within the current major';
  return `npm ${npmCommand.args.join(' ')}  — bumps ${tag}`;
}

function reportFile(
  label: string,
  filePath: string,
  written: boolean,
  forced: boolean,
  suffix = '',
): string {
  if (!written) return `${label}: kept existing ${filePath}${suffix}`;
  return forced ? `${label}: rewrote ${filePath}${suffix}` : `${label}: created ${filePath}${suffix}`;
}

export const upgradeCommand = new Command('upgrade')
  .description(
    'Upgrade installed @well-played.gg/* packages and refresh bundled skills/agent configs.',
  )
  .option('--project <path>', 'project root', process.cwd())
  .option('--latest', 'allow cross-major bumps (npm install <pkg>@latest); default stays in major')
  .option(
    '--rewrite-claude-md',
    'overwrite CLAUDE.md with the latest template (skips the prompt)',
  )
  .option('--no-rewrite-claude-md', 'never overwrite CLAUDE.md (skips the prompt)')
  .option(
    '--rewrite-mcp-json',
    'overwrite .mcp.json with the latest template (skips the prompt)',
  )
  .option('--no-rewrite-mcp-json', 'never overwrite .mcp.json (skips the prompt)')
  .option('-y, --yes', 'non-interactive mode: keep CLAUDE.md and .mcp.json untouched by default')
  .action((opts: UpgradeCliOptions) =>
    runCommand(async () => {
      const inputs: UpgradeInputs = {
        projectDir: path.resolve(opts.project),
        latest: opts.latest === true,
        rewriteClaudeMdFlag: opts.rewriteClaudeMd,
        rewriteMcpJsonFlag: opts.rewriteMcpJson,
        yes: opts.yes,
      };

      try {
        const report = await runUpgrade(inputs, {
          runNpm: spawnNpm,
          ask: interactiveAsk,
          isInteractive: process.stdin.isTTY === true,
          onPlan: (plan, latest) => {
            log.info(`Found ${plan.deps.length} WellPlayed package(s):`);
            log.info(summariseDeps(plan.deps));
            log.step(1, `Running: ${describeNpmCommand(plan.npmCommand, latest)}`);
          },
        });

        log.step(2, 'Refreshing skills, .mcp.json, and CLAUDE.md');
        log.success(
          `Refreshed ${report.install.copiedCount} skill bundle(s) in ${report.install.claudeSkillsDir}`,
        );
        log.info(
          reportFile(
            '.mcp.json',
            report.install.mcpJsonPath,
            report.install.mcpJsonWritten,
            report.forced.mcpJson,
          ),
        );
        log.info(
          reportFile(
            'CLAUDE.md',
            report.install.claudeMdPath,
            report.install.claudeMdWritten,
            report.forced.claudeMd,
            ` (variant: ${report.install.claudeMdVariant})`,
          ),
        );
        log.success('Upgrade complete.');
      } catch (error) {
        if (error instanceof NoWellPlayedDepsError) {
          log.error(error.message);
          log.info(
            'If this is a fresh project, run `wellplayed create-app` or install the SDKs first.',
          );
          process.exit(1);
        }
        throw error;
      }
    }),
  );
