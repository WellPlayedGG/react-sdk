import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import {
  NoWellPlayedDepsError,
  type RunNpm,
  runUpgrade,
  type UpgradeInputs,
  type UpgradeIO,
} from '../src/commands/upgrade';
import type { AskRewrite } from '../src/commands/upgrade/core';

interface RecordedNpm {
  args: string[];
  cwd: string;
}

interface TestContext {
  dir: string;
  npmCalls: RecordedNpm[];
  asks: string[];
}

interface PackageJsonShape {
  name: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

async function writePackageJson(dir: string, pkg: PackageJsonShape): Promise<void> {
  await fs.writeFile(path.join(dir, 'package.json'), JSON.stringify(pkg, null, 2));
}

async function seedSkillFixture(dir: string): Promise<void> {
  const skill = path.join(dir, 'node_modules', '@well-played.gg', 'react-sdk', 'skills', 'wellplayed-react');
  await fs.mkdir(skill, { recursive: true });
  await fs.writeFile(path.join(skill, 'SKILL.md'), '# react');
}

function makeIO(ctx: TestContext, ask: AskRewrite): UpgradeIO {
  const runNpm: RunNpm = async (args, cwd) => {
    ctx.npmCalls.push({ args, cwd });
  };
  const trackedAsk: AskRewrite = async (file) => {
    ctx.asks.push(file);
    return ask(file);
  };
  return { runNpm, ask: trackedAsk, isInteractive: true };
}

describe('runUpgrade', () => {
  const ctx: TestContext = { dir: '', npmCalls: [], asks: [] };

  beforeEach(async () => {
    ctx.dir = await fs.mkdtemp(path.join(os.tmpdir(), 'wp-upgrade-int-'));
    ctx.npmCalls = [];
    ctx.asks = [];
  });

  afterEach(async () => {
    await fs.rm(ctx.dir, { recursive: true, force: true });
  });

  it('throws NoWellPlayedDepsError when package.json has no @well-played.gg/* dep', async () => {
    await writePackageJson(ctx.dir, { name: 'plain', dependencies: { react: '^18.3.0' } });
    const inputs: UpgradeInputs = { projectDir: ctx.dir, latest: false };
    await expect(runUpgrade(inputs, makeIO(ctx, async () => false))).rejects.toBeInstanceOf(
      NoWellPlayedDepsError,
    );
    expect(ctx.npmCalls).toEqual([]);
  });

  it('default flow: runs `npm update <pkgs>`, picks `react` variant, leaves files untouched (interactive answer = no)', async () => {
    await writePackageJson(ctx.dir, {
      name: 'demo',
      dependencies: {
        '@well-played.gg/react-sdk': '^1.2.0',
        '@well-played.gg/typescript-sdk': '^1.4.0',
      },
    });
    await seedSkillFixture(ctx.dir);
    await fs.writeFile(path.join(ctx.dir, 'CLAUDE.md'), '# user customizations');
    await fs.writeFile(path.join(ctx.dir, '.mcp.json'), '{"mcpServers":{"custom":{"url":"x"}}}');

    const report = await runUpgrade(
      { projectDir: ctx.dir, latest: false },
      makeIO(ctx, async () => false),
    );

    expect(ctx.npmCalls).toHaveLength(1);
    expect(ctx.npmCalls[0]).toEqual({
      args: ['update', '@well-played.gg/react-sdk', '@well-played.gg/typescript-sdk'],
      cwd: ctx.dir,
    });
    expect(ctx.asks).toEqual(['CLAUDE.md', '.mcp.json']);

    expect(report.install.claudeMdVariant).toBe('react');
    expect(report.install.claudeMdWritten).toBe(false);
    expect(report.install.mcpJsonWritten).toBe(false);
    expect(report.forced).toEqual({ claudeMd: false, mcpJson: false });

    expect(await fs.readFile(path.join(ctx.dir, 'CLAUDE.md'), 'utf8')).toBe('# user customizations');
    expect(await fs.readFile(path.join(ctx.dir, '.mcp.json'), 'utf8')).toBe(
      '{"mcpServers":{"custom":{"url":"x"}}}',
    );
  });

  it('with --latest, runs `npm install <pkg>@latest ...`', async () => {
    await writePackageJson(ctx.dir, {
      name: 'demo',
      dependencies: { '@well-played.gg/typescript-sdk': '^1.4.0' },
    });

    await runUpgrade(
      { projectDir: ctx.dir, latest: true, yes: true },
      makeIO(ctx, async () => false),
    );

    expect(ctx.npmCalls[0]?.args).toEqual([
      'install',
      '@well-played.gg/typescript-sdk@latest',
    ]);
  });

  it('with --rewrite-claude-md and --rewrite-mcp-json, overwrites both files without prompting', async () => {
    await writePackageJson(ctx.dir, {
      name: 'demo',
      dependencies: { '@well-played.gg/typescript-sdk': '^1.4.0' },
    });
    await fs.writeFile(path.join(ctx.dir, 'CLAUDE.md'), '# stale');
    await fs.writeFile(path.join(ctx.dir, '.mcp.json'), '{"old":true}');

    const report = await runUpgrade(
      {
        projectDir: ctx.dir,
        latest: false,
        rewriteClaudeMdFlag: true,
        rewriteMcpJsonFlag: true,
      },
      makeIO(ctx, async () => false),
    );

    expect(ctx.asks).toEqual([]);
    expect(report.install.claudeMdWritten).toBe(true);
    expect(report.install.mcpJsonWritten).toBe(true);
    expect(report.forced).toEqual({ claudeMd: true, mcpJson: true });
    expect(await fs.readFile(path.join(ctx.dir, 'CLAUDE.md'), 'utf8')).toContain(
      'GraphQL Rule (MANDATORY)',
    );
    expect(await fs.readFile(path.join(ctx.dir, '.mcp.json'), 'utf8')).toContain(
      'mcp.well-played.gg/mcp',
    );
  });

  it('picks `generic` variant when only the typescript-sdk is installed', async () => {
    await writePackageJson(ctx.dir, {
      name: 'demo',
      dependencies: { '@well-played.gg/typescript-sdk': '^1.4.0' },
    });

    const report = await runUpgrade(
      { projectDir: ctx.dir, latest: false, yes: true },
      makeIO(ctx, async () => false),
    );

    expect(report.install.claudeMdVariant).toBe('generic');
    const claudeMd = await fs.readFile(path.join(ctx.dir, 'CLAUDE.md'), 'utf8');
    expect(claudeMd).not.toContain('WellPlayedProvider');
    expect(claudeMd).toContain('createTypedClient');
  });

  it('fires the onPlan callback before npm runs', async () => {
    await writePackageJson(ctx.dir, {
      name: 'demo',
      dependencies: { '@well-played.gg/typescript-sdk': '^1.4.0' },
    });
    const events: string[] = [];

    const io: UpgradeIO = {
      runNpm: async (args) => {
        events.push(`npm:${args[0]}`);
      },
      ask: async () => false,
      isInteractive: false,
      onPlan: (plan) => {
        events.push(`plan:${plan.deps.map((d) => d.name).join(',')}`);
      },
    };

    await runUpgrade({ projectDir: ctx.dir, latest: false, yes: true }, io);

    expect(events).toEqual(['plan:@well-played.gg/typescript-sdk', 'npm:update']);
  });
});
