import path from 'path';
import { writeFileIfMissing } from '../utils/write-file-if-missing.js';
import { GENERIC_CLAUDE_MD } from './claude-md/generic.js';
import { REACT_CLAUDE_MD } from './claude-md/react.js';
import type { ClaudeMdVariant } from './claude-md/types.js';

export interface WriteClaudeMdResult {
  written: boolean;
  claudeMdPath: string;
  variant: ClaudeMdVariant;
}

const TEMPLATES: Record<ClaudeMdVariant, string> = {
  generic: GENERIC_CLAUDE_MD,
  react: REACT_CLAUDE_MD,
};

export interface WriteClaudeMdOptions {
  force?: boolean;
}

export async function writeClaudeMd(
  projectRoot: string,
  variant: ClaudeMdVariant = 'generic',
  options: WriteClaudeMdOptions = {},
): Promise<WriteClaudeMdResult> {
  const claudeMdPath = path.join(projectRoot, 'CLAUDE.md');
  const result = await writeFileIfMissing(claudeMdPath, TEMPLATES[variant], {
    force: options.force,
  });
  return { written: result.written, claudeMdPath, variant };
}
