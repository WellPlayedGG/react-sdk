#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import { fetchPack } from './fetch-pack';
import { renderReactSkill, renderTypescriptSkill } from './render-skill';
import { writeBundle } from './write-bundle';

type Opts = { base: string; target: string; dest: string };

async function main(): Promise<void> {
  const program = new Command();
  program
    .name('wp-bundle-skills')
    .requiredOption('--base <url>', 'MCP base URL', 'https://mcp.well-played.gg')
    .requiredOption('--target <name>', 'react | typescript')
    .requiredOption('--dest <path>', 'absolute destination path (the SDK package root)');

  program.parse();
  const opts = program.opts<Opts>();

  const pack = await fetchPack(opts.base);
  const bundle = opts.target === 'react' ? renderReactSkill(pack) : renderTypescriptSkill(pack);
  await writeBundle(bundle, path.resolve(opts.dest));
  console.log(`wrote ${bundle.slug} version ${bundle.version}`);
}
main().catch((e: unknown) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
