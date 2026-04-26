import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import {
  type AskRewrite,
  computeNpmUpgradeCommand,
  detectClaudeMdVariant,
  findWellPlayedDeps,
  resolveRewriteDecisions,
  type WellPlayedDep,
} from '../src/commands/upgrade/core';

interface TestContext {
  dir: string;
}

interface PackageJsonShape {
  name: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

async function writePackageJson(dir: string, pkg: PackageJsonShape): Promise<void> {
  await fs.writeFile(path.join(dir, 'package.json'), JSON.stringify(pkg, null, 2));
}

describe('findWellPlayedDeps', () => {
  const ctx: TestContext = { dir: '' };

  beforeEach(async () => {
    ctx.dir = await fs.mkdtemp(path.join(os.tmpdir(), 'wp-upgrade-'));
  });

  afterEach(async () => {
    await fs.rm(ctx.dir, { recursive: true, force: true });
  });

  it('returns deps from both `dependencies` and `devDependencies`, only WellPlayed-scoped', async () => {
    await writePackageJson(ctx.dir, {
      name: 'demo',
      dependencies: {
        react: '^18.3.0',
        '@well-played.gg/react-sdk': '^1.2.0',
        '@well-played.gg/typescript-sdk': '^1.4.0',
      },
      devDependencies: {
        typescript: '^5.5.0',
        '@well-played.gg/cli': '^0.4.0',
      },
    });

    const deps = await findWellPlayedDeps(ctx.dir);

    expect(deps).toEqual([
      { name: '@well-played.gg/react-sdk', currentSpec: '^1.2.0', kind: 'dependencies' },
      { name: '@well-played.gg/typescript-sdk', currentSpec: '^1.4.0', kind: 'dependencies' },
      { name: '@well-played.gg/cli', currentSpec: '^0.4.0', kind: 'devDependencies' },
    ]);
  });

  it('returns an empty array when no WellPlayed packages are present', async () => {
    await writePackageJson(ctx.dir, { name: 'plain', dependencies: { react: '^18.3.0' } });
    expect(await findWellPlayedDeps(ctx.dir)).toEqual([]);
  });

  it('throws a helpful error when package.json is missing', async () => {
    await expect(findWellPlayedDeps(ctx.dir)).rejects.toThrow(/Could not read .*package\.json/);
  });

  it('throws when package.json is not valid JSON', async () => {
    await fs.writeFile(path.join(ctx.dir, 'package.json'), '{ broken');
    await expect(findWellPlayedDeps(ctx.dir)).rejects.toThrow(/Invalid package\.json/);
  });
});

describe('computeNpmUpgradeCommand', () => {
  const deps: WellPlayedDep[] = [
    { name: '@well-played.gg/react-sdk', currentSpec: '^1.2.0', kind: 'dependencies' },
    { name: '@well-played.gg/typescript-sdk', currentSpec: '^1.4.0', kind: 'dependencies' },
  ];

  it('without --latest, runs `npm update <pkg...>` to stay within the existing semver range', () => {
    expect(computeNpmUpgradeCommand(deps, false)).toEqual({
      cmd: 'update',
      args: ['update', '@well-played.gg/react-sdk', '@well-played.gg/typescript-sdk'],
    });
  });

  it('with --latest, runs `npm install <pkg>@latest ...` to allow cross-major bumps', () => {
    expect(computeNpmUpgradeCommand(deps, true)).toEqual({
      cmd: 'install',
      args: [
        'install',
        '@well-played.gg/react-sdk@latest',
        '@well-played.gg/typescript-sdk@latest',
      ],
    });
  });
});

describe('detectClaudeMdVariant', () => {
  it('returns `react` when the React SDK is in the dependency list', () => {
    expect(
      detectClaudeMdVariant([
        { name: '@well-played.gg/react-sdk', currentSpec: '^1.2.0', kind: 'dependencies' },
        { name: '@well-played.gg/typescript-sdk', currentSpec: '^1.4.0', kind: 'dependencies' },
      ]),
    ).toBe('react');
  });

  it('returns `generic` when only the TypeScript SDK is present', () => {
    expect(
      detectClaudeMdVariant([
        { name: '@well-played.gg/typescript-sdk', currentSpec: '^1.4.0', kind: 'dependencies' },
      ]),
    ).toBe('generic');
  });
});

describe('resolveRewriteDecisions', () => {
  const askYes: AskRewrite = async () => true;
  const askNo: AskRewrite = async () => false;

  it('honors explicit CLI flags (highest priority)', async () => {
    expect(
      await resolveRewriteDecisions({
        rewriteClaudeMdFlag: true,
        rewriteMcpJsonFlag: false,
        isInteractive: true,
        ask: askYes,
      }),
    ).toEqual({ rewriteClaudeMd: true, rewriteMcpJson: false });
  });

  it('with --yes (and no flags), defaults to keeping both files', async () => {
    expect(
      await resolveRewriteDecisions({ yes: true, isInteractive: true, ask: askYes }),
    ).toEqual({ rewriteClaudeMd: false, rewriteMcpJson: false });
  });

  it('non-interactive (no flags, no --yes) defaults to keeping both files', async () => {
    expect(
      await resolveRewriteDecisions({ isInteractive: false, ask: askYes }),
    ).toEqual({ rewriteClaudeMd: false, rewriteMcpJson: false });
  });

  it('interactive (no flags) prompts the caller for each file', async () => {
    const asked: string[] = [];
    const askMixed: AskRewrite = async (file) => {
      asked.push(file);
      return file === 'CLAUDE.md';
    };
    expect(
      await resolveRewriteDecisions({ isInteractive: true, ask: askMixed }),
    ).toEqual({ rewriteClaudeMd: true, rewriteMcpJson: false });
    expect(asked).toEqual(['CLAUDE.md', '.mcp.json']);
  });

  it('an explicit flag overrides --yes (per-file)', async () => {
    expect(
      await resolveRewriteDecisions({
        rewriteClaudeMdFlag: true,
        yes: true,
        isInteractive: false,
        ask: askNo,
      }),
    ).toEqual({ rewriteClaudeMd: true, rewriteMcpJson: false });
  });
});
