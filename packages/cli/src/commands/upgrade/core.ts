import fs from 'fs/promises';
import path from 'path';
import type { ClaudeMdVariant } from '../claude-md/types.js';

export type DepKind = 'dependencies' | 'devDependencies';

export interface WellPlayedDep {
  name: string;
  currentSpec: string;
  kind: DepKind;
}

export type NpmCommandKind = 'install' | 'update';

export interface NpmUpgradeCommand {
  cmd: NpmCommandKind;
  args: string[];
}

export interface RewriteDecisions {
  rewriteClaudeMd: boolean;
  rewriteMcpJson: boolean;
}

export type RewritePromptResult = boolean;

export type AskRewrite = (file: 'CLAUDE.md' | '.mcp.json') => Promise<RewritePromptResult>;

export interface RewriteResolverInput {
  rewriteClaudeMdFlag?: boolean;
  rewriteMcpJsonFlag?: boolean;
  yes?: boolean;
  isInteractive: boolean;
  ask: AskRewrite;
}

interface RawPackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

const WP_SCOPE = '@well-played.gg/';

export async function findWellPlayedDeps(projectDir: string): Promise<WellPlayedDep[]> {
  const pkgJsonPath = path.join(projectDir, 'package.json');
  const raw = await fs.readFile(pkgJsonPath, 'utf8').catch(() => {
    throw new Error(`Could not read ${pkgJsonPath}. Is this a Node project?`);
  });
  const parsed = parsePackageJson(raw, pkgJsonPath);
  const deps = collectWpDeps(parsed.dependencies, 'dependencies');
  const devDeps = collectWpDeps(parsed.devDependencies, 'devDependencies');
  return [...deps, ...devDeps];
}

function parsePackageJson(raw: string, source: string): RawPackageJson {
  try {
    const json: unknown = JSON.parse(raw);
    if (!isObject(json)) throw new Error('not an object');
    const deps = isObject(json.dependencies) ? toStringMap(json.dependencies) : undefined;
    const devDeps = isObject(json.devDependencies)
      ? toStringMap(json.devDependencies)
      : undefined;
    return { dependencies: deps, devDependencies: devDeps };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid package.json at ${source}: ${message}`);
  }
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function toStringMap(value: Record<string, unknown>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(value)) {
    if (typeof v === 'string') out[k] = v;
  }
  return out;
}

function collectWpDeps(
  map: Record<string, string> | undefined,
  kind: DepKind,
): WellPlayedDep[] {
  if (!map) return [];
  return Object.entries(map)
    .filter(([name]) => name.startsWith(WP_SCOPE))
    .map(([name, currentSpec]) => ({ name, currentSpec, kind }));
}

/**
 * Build the npm invocation that upgrades the given packages.
 * - Without `latest`: `npm update <pkg...>` — respects the existing semver
 *   range in package.json, so stays within the current major.
 * - With `latest`: `npm install <pkg>@latest ...` — bumps to whatever
 *   `latest` resolves to, including across majors.
 */
export function computeNpmUpgradeCommand(
  deps: WellPlayedDep[],
  latest: boolean,
): NpmUpgradeCommand {
  const names = deps.map((d) => d.name);
  if (latest) {
    return { cmd: 'install', args: ['install', ...names.map((n) => `${n}@latest`)] };
  }
  return { cmd: 'update', args: ['update', ...names] };
}

export function detectClaudeMdVariant(deps: WellPlayedDep[]): ClaudeMdVariant {
  return deps.some((d) => d.name === '@well-played.gg/react-sdk') ? 'react' : 'generic';
}

/**
 * Decide whether the upgrade command should overwrite CLAUDE.md and
 * .mcp.json. CLI flags win; otherwise (interactive) prompt; otherwise
 * (non-interactive or `--yes`) keep the safe default of *not* rewriting.
 */
export async function resolveRewriteDecisions(
  input: RewriteResolverInput,
): Promise<RewriteDecisions> {
  return {
    rewriteClaudeMd: await resolveOne(
      input.rewriteClaudeMdFlag,
      input.yes,
      input.isInteractive,
      'CLAUDE.md',
      input.ask,
    ),
    rewriteMcpJson: await resolveOne(
      input.rewriteMcpJsonFlag,
      input.yes,
      input.isInteractive,
      '.mcp.json',
      input.ask,
    ),
  };
}

async function resolveOne(
  flag: boolean | undefined,
  yes: boolean | undefined,
  isInteractive: boolean,
  file: 'CLAUDE.md' | '.mcp.json',
  ask: AskRewrite,
): Promise<boolean> {
  if (typeof flag === 'boolean') return flag;
  if (yes) return false;
  if (!isInteractive) return false;
  return ask(file);
}
