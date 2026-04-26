import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { installSkillsCommand } from '../src/commands/install-skills';
import { installSkills } from '../src/commands/install-skills-core';

interface TestContext {
  dir: string;
}

async function makeReactSdkSkillFixture(dir: string): Promise<void> {
  const srcSkill = path.join(
    dir,
    'node_modules',
    '@well-played.gg',
    'react-sdk',
    'skills',
    'wellplayed-react',
  );
  await fs.mkdir(srcSkill, { recursive: true });
  await fs.writeFile(path.join(srcSkill, 'SKILL.md'), '# test');
}

async function runInstallSkills(dir: string): Promise<void> {
  await installSkillsCommand.parseAsync(['node', 'x', '--project', dir]);
}

describe('install-skills', () => {
  const ctx: TestContext = { dir: '' };

  beforeEach(async () => {
    ctx.dir = await fs.mkdtemp(path.join(os.tmpdir(), 'cli-test-'));
  });

  afterEach(async () => {
    await fs.rm(ctx.dir, { recursive: true, force: true });
  });

  it('copies skills from node_modules into .claude/skills', async () => {
    await makeReactSdkSkillFixture(ctx.dir);
    await runInstallSkills(ctx.dir);
    const dest = path.join(ctx.dir, '.claude', 'skills', 'wellplayed-react', 'SKILL.md');
    expect(await fs.readFile(dest, 'utf8')).toBe('# test');
  });

  it('writes a generic CLAUDE.md by default that pins the typed `graphql` rule and is not React-specific', async () => {
    await makeReactSdkSkillFixture(ctx.dir);
    await runInstallSkills(ctx.dir);

    const claudeMd = await fs.readFile(path.join(ctx.dir, 'CLAUDE.md'), 'utf8');
    expect(claudeMd).toContain('GraphQL Rule (MANDATORY)');
    expect(claudeMd).toContain('@well-played.gg/typescript-sdk');
    expect(claudeMd).toMatch(/never use\s+`?gql`?\s+(from|with)/i);

    expect(claudeMd).toContain('createTypedClient');
    expect(claudeMd).toContain('createWellPlayedClient');
    expect(claudeMd).not.toContain('WellPlayedProvider');
    expect(claudeMd).not.toContain('VITE_WP_');
    expect(claudeMd).not.toContain('useWellPlayed');
  });

  it('writes a React-specific CLAUDE.md when invoked with the `react` variant', async () => {
    await makeReactSdkSkillFixture(ctx.dir);

    const result = await installSkills(ctx.dir, { claudeMdVariant: 'react' });

    expect(result.claudeMdVariant).toBe('react');
    const claudeMd = await fs.readFile(path.join(ctx.dir, 'CLAUDE.md'), 'utf8');
    expect(claudeMd).toContain('GraphQL Rule (MANDATORY)');
    expect(claudeMd).toContain('@well-played.gg/typescript-sdk');
    expect(claudeMd).toMatch(/never use\s+`?gql`?\s+(from|with)/i);

    expect(claudeMd).toContain('WellPlayedProvider');
    expect(claudeMd).toContain('useWellPlayed');
    expect(claudeMd).toContain('VITE_WP_ORGANIZATION_ID');
    expect(claudeMd).toContain('src/main.tsx');
  });

  it('leaves an existing CLAUDE.md untouched', async () => {
    await makeReactSdkSkillFixture(ctx.dir);
    const existing = '# Custom CLAUDE.md — do not overwrite\n';
    await fs.writeFile(path.join(ctx.dir, 'CLAUDE.md'), existing);

    await runInstallSkills(ctx.dir);

    expect(await fs.readFile(path.join(ctx.dir, 'CLAUDE.md'), 'utf8')).toBe(existing);
  });

  it('leaves an existing .mcp.json untouched', async () => {
    await makeReactSdkSkillFixture(ctx.dir);
    const existing = JSON.stringify({ mcpServers: { custom: { url: 'x' } } }, null, 2);
    await fs.writeFile(path.join(ctx.dir, '.mcp.json'), existing);

    await runInstallSkills(ctx.dir);

    expect(await fs.readFile(path.join(ctx.dir, '.mcp.json'), 'utf8')).toBe(existing);
  });

  it('overwrites an existing CLAUDE.md when invoked with `forceClaudeMd: true`', async () => {
    await makeReactSdkSkillFixture(ctx.dir);
    await fs.writeFile(path.join(ctx.dir, 'CLAUDE.md'), '# stale content');

    const result = await installSkills(ctx.dir, { forceClaudeMd: true });

    expect(result.claudeMdWritten).toBe(true);
    const written = await fs.readFile(path.join(ctx.dir, 'CLAUDE.md'), 'utf8');
    expect(written).toContain('GraphQL Rule (MANDATORY)');
    expect(written).not.toContain('stale content');
  });

  it('overwrites an existing .mcp.json when invoked with `forceMcpJson: true`', async () => {
    await makeReactSdkSkillFixture(ctx.dir);
    await fs.writeFile(path.join(ctx.dir, '.mcp.json'), '{"old":true}');

    const result = await installSkills(ctx.dir, { forceMcpJson: true });

    expect(result.mcpJsonWritten).toBe(true);
    const written = await fs.readFile(path.join(ctx.dir, '.mcp.json'), 'utf8');
    expect(JSON.parse(written)).toEqual({
      mcpServers: { wellplayed: { type: 'http', url: 'https://mcp.well-played.gg/mcp' } },
    });
  });

  it('copies multiple skills (e.g. wellplayed-cli alongside wellplayed-api) from typescript-sdk', async () => {
    const tsRoot = path.join(ctx.dir, 'node_modules', '@well-played.gg', 'typescript-sdk', 'skills');
    await fs.mkdir(path.join(tsRoot, 'wellplayed-api'), { recursive: true });
    await fs.writeFile(path.join(tsRoot, 'wellplayed-api', 'SKILL.md'), '# api');
    await fs.mkdir(path.join(tsRoot, 'wellplayed-cli'), { recursive: true });
    await fs.writeFile(path.join(tsRoot, 'wellplayed-cli', 'SKILL.md'), '# cli');

    await runInstallSkills(ctx.dir);

    expect(
      await fs.readFile(path.join(ctx.dir, '.claude', 'skills', 'wellplayed-api', 'SKILL.md'), 'utf8'),
    ).toBe('# api');
    expect(
      await fs.readFile(path.join(ctx.dir, '.claude', 'skills', 'wellplayed-cli', 'SKILL.md'), 'utf8'),
    ).toBe('# cli');
  });
});
