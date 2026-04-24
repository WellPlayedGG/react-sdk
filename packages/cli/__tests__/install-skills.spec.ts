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
});
