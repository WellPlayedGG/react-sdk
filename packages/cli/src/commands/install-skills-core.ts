import fs from 'fs/promises';
import path from 'path';
import { writeFileIfMissing } from '../utils/write-file-if-missing.js';
import type { ClaudeMdVariant } from './claude-md/types.js';
import { writeClaudeMd } from './write-claude-md.js';

export interface InstallSkillsOptions {
  claudeMdVariant?: ClaudeMdVariant;
  forceClaudeMd?: boolean;
  forceMcpJson?: boolean;
}

export interface InstallSkillsResult {
  copiedCount: number;
  claudeSkillsDir: string;
  mcpJsonWritten: boolean;
  mcpJsonPath: string;
  claudeMdWritten: boolean;
  claudeMdPath: string;
  claudeMdVariant: ClaudeMdVariant;
}

const MCP_JSON_CONTENT = JSON.stringify(
  {
    mcpServers: {
      wellplayed: { type: 'http', url: 'https://mcp.well-played.gg/mcp' },
    },
  },
  null,
  2,
);

/**
 * Copy bundled SDK skills into `.claude/skills/`, then seed `.mcp.json` and
 * `CLAUDE.md` if missing. Existing user files are never overwritten.
 *
 * `claudeMdVariant` controls which CLAUDE.md template is seeded — `generic`
 * (the default) for arbitrary TypeScript projects using the typescript-sdk,
 * `react` for projects scaffolded by `wellplayed create-app`.
 *
 * Shared by the `install-skills` command and `create-app`.
 */
export async function installSkills(
  projectRoot: string,
  options: InstallSkillsOptions = {},
): Promise<InstallSkillsResult> {
  const project = path.resolve(projectRoot);
  const variant: ClaudeMdVariant = options.claudeMdVariant ?? 'generic';
  const claudeSkills = path.join(project, '.claude', 'skills');
  await fs.mkdir(claudeSkills, { recursive: true });

  const pkgRoots = [
    path.join(project, 'node_modules', '@well-played.gg', 'react-sdk', 'skills'),
    path.join(project, 'node_modules', '@well-played.gg', 'typescript-sdk', 'skills'),
  ];
  const mcpJsonPath = path.join(project, '.mcp.json');

  const [perRootCounts, mcpResult, claudeMdResult] = await Promise.all([
    Promise.all(pkgRoots.map((root) => copySkillsFromRoot(root, claudeSkills))),
    writeFileIfMissing(mcpJsonPath, MCP_JSON_CONTENT, { force: options.forceMcpJson }),
    writeClaudeMd(project, variant, { force: options.forceClaudeMd }),
  ]);

  return {
    copiedCount: perRootCounts.reduce((sum, n) => sum + n, 0),
    claudeSkillsDir: claudeSkills,
    mcpJsonWritten: mcpResult.written,
    mcpJsonPath: mcpResult.filePath,
    claudeMdWritten: claudeMdResult.written,
    claudeMdPath: claudeMdResult.claudeMdPath,
    claudeMdVariant: claudeMdResult.variant,
  };
}

async function copySkillsFromRoot(root: string, claudeSkills: string): Promise<number> {
  const stat = await fs.stat(root).catch(() => null);
  if (!stat?.isDirectory()) return 0;
  const entries = await fs.readdir(root, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory());
  await Promise.all(
    dirs.map((entry) => copyDir(path.join(root, entry.name), path.join(claudeSkills, entry.name))),
  );
  return dirs.length;
}

async function copyDir(src: string, dest: string): Promise<void> {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  await Promise.all(
    entries.map((e) => {
      const s = path.join(src, e.name);
      const d = path.join(dest, e.name);
      return e.isDirectory() ? copyDir(s, d) : fs.copyFile(s, d);
    }),
  );
}
