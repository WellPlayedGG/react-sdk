import { describe, it, expect } from 'vitest';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { installSkillsCommand } from '../src/commands/install-skills';

describe('install-skills', () => {
  it('copies skills from node_modules into .claude/skills', async () => {
    const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'cli-test-'));
    const srcSkill = path.join(dir, 'node_modules', '@well-played.gg', 'react-sdk', 'skills', 'wellplayed-react');
    await fs.mkdir(srcSkill, { recursive: true });
    await fs.writeFile(path.join(srcSkill, 'SKILL.md'), '# test');
    await installSkillsCommand.parseAsync(['node', 'x', '--project', dir]);
    const dest = path.join(dir, '.claude', 'skills', 'wellplayed-react', 'SKILL.md');
    expect(await fs.readFile(dest, 'utf8')).toBe('# test');
    await fs.rm(dir, { recursive: true, force: true });
  });

  it('copies multiple skills (e.g. wellplayed-cli alongside wellplayed-api) from typescript-sdk', async () => {
    const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'cli-test-'));
    const tsRoot = path.join(dir, 'node_modules', '@well-played.gg', 'typescript-sdk', 'skills');
    await fs.mkdir(path.join(tsRoot, 'wellplayed-api'), { recursive: true });
    await fs.writeFile(path.join(tsRoot, 'wellplayed-api', 'SKILL.md'), '# api');
    await fs.mkdir(path.join(tsRoot, 'wellplayed-cli'), { recursive: true });
    await fs.writeFile(path.join(tsRoot, 'wellplayed-cli', 'SKILL.md'), '# cli');

    await installSkillsCommand.parseAsync(['node', 'x', '--project', dir]);

    expect(
      await fs.readFile(path.join(dir, '.claude', 'skills', 'wellplayed-api', 'SKILL.md'), 'utf8'),
    ).toBe('# api');
    expect(
      await fs.readFile(path.join(dir, '.claude', 'skills', 'wellplayed-cli', 'SKILL.md'), 'utf8'),
    ).toBe('# cli');

    await fs.rm(dir, { recursive: true, force: true });
  });
});
