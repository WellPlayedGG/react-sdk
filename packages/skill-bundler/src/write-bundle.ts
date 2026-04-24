import fs from 'fs/promises';
import path from 'path';
import type { SkillBundle } from './types';

export async function writeBundle(bundle: SkillBundle, destRoot: string): Promise<void> {
  const root = path.join(destRoot, 'skills', bundle.slug);
  await fs.rm(root, { recursive: true, force: true });
  await fs.mkdir(root, { recursive: true });
  await fs.writeFile(path.join(root, 'SKILL.md'), bundle.skillMd, 'utf8');
  await fs.writeFile(path.join(root, '.kp-version'), bundle.version, 'utf8');
  for (const g of bundle.guides) {
    await fs.writeFile(path.join(root, g.filename), g.contents, 'utf8');
  }
  if (bundle.recipes.length > 0) {
    const recipesDir = path.join(root, 'recipes');
    await fs.mkdir(recipesDir, { recursive: true });
    for (const r of bundle.recipes) {
      await fs.writeFile(path.join(recipesDir, r.filename), r.contents, 'utf8');
    }
  }
}
