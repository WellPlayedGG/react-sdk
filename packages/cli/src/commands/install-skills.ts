import fs from 'fs/promises';
import path from 'path';
import { Command } from 'commander';

export const installSkillsCommand = new Command('install-skills')
  .description('Copy WellPlayed SDK skill bundles into .claude/skills/ and write .mcp.json if missing')
  .option('--project <path>', 'project root', process.cwd())
  .action(async (opts: { project: string }) => {
    const project = path.resolve(opts.project);
    const claudeSkills = path.join(project, '.claude', 'skills');
    await fs.mkdir(claudeSkills, { recursive: true });

    const pkgRoots = [
      path.join(project, 'node_modules', '@well-played.gg', 'react-sdk', 'skills'),
      path.join(project, 'node_modules', '@well-played.gg', 'typescript-sdk', 'skills'),
    ];
    let copied = 0;
    for (const root of pkgRoots) {
      const stat = await fs.stat(root).catch(() => null);
      if (!stat?.isDirectory()) continue;
      const entries = await fs.readdir(root, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        await copyDir(path.join(root, entry.name), path.join(claudeSkills, entry.name));
        copied++;
      }
    }
    if (copied === 0) {
      console.error('No skills found in node_modules. Install @well-played.gg/react-sdk or /typescript-sdk first.');
      process.exit(1);
    }

    const mcpJson = path.join(project, '.mcp.json');
    const exists = await fs.stat(mcpJson).catch(() => null);
    if (!exists) {
      await fs.writeFile(mcpJson, JSON.stringify({
        mcpServers: {
          wellplayed: { type: 'http', url: 'https://mcp.well-played.gg/mcp' },
        },
      }, null, 2));
      console.log(`wrote ${mcpJson}`);
    } else {
      console.log(`.mcp.json already exists — leaving untouched. To add WellPlayed, merge: { mcpServers: { wellplayed: { type: "http", url: "https://mcp.well-played.gg/mcp" } } }`);
    }
    console.log(`installed ${copied} skill(s) into ${claudeSkills}`);
  });

async function copyDir(src: string, dest: string): Promise<void> {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const e of entries) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) await copyDir(s, d);
    else await fs.copyFile(s, d);
  }
}
