import fs from 'fs/promises';
import path from 'path';

export interface InstallSkillsResult {
  copiedCount: number;
  claudeSkillsDir: string;
  mcpJsonWritten: boolean;
  mcpJsonPath: string;
}

/**
 * Copy WellPlayed SDK skill bundles from `node_modules/@well-played.gg/*` into
 * `<projectRoot>/.claude/skills/` and, if missing, write a default `.mcp.json`
 * pointing at the WellPlayed MCP HTTP endpoint.
 *
 * Shared by the `install-skills` command and the `create-app` command.
 */
export async function installSkills(projectRoot: string): Promise<InstallSkillsResult> {
  const project = path.resolve(projectRoot);
  const claudeSkills = path.join(project, '.claude', 'skills');
  await fs.mkdir(claudeSkills, { recursive: true });

  const pkgRoots = [
    path.join(project, 'node_modules', '@well-played.gg', 'react-sdk', 'skills'),
    path.join(project, 'node_modules', '@well-played.gg', 'typescript-sdk', 'skills'),
  ];
  let copiedCount = 0;
  for (const root of pkgRoots) {
    const stat = await fs.stat(root).catch(() => null);
    if (!stat?.isDirectory()) continue;
    const entries = await fs.readdir(root, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      await copyDir(path.join(root, entry.name), path.join(claudeSkills, entry.name));
      copiedCount++;
    }
  }

  const mcpJson = path.join(project, '.mcp.json');
  const exists = await fs.stat(mcpJson).catch(() => null);
  let mcpJsonWritten = false;
  if (!exists) {
    await fs.writeFile(
      mcpJson,
      JSON.stringify(
        {
          mcpServers: {
            wellplayed: { type: 'http', url: 'https://mcp.well-played.gg/mcp' },
          },
        },
        null,
        2,
      ),
    );
    mcpJsonWritten = true;
  }

  return {
    copiedCount,
    claudeSkillsDir: claudeSkills,
    mcpJsonWritten,
    mcpJsonPath: mcpJson,
  };
}

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
