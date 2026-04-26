import fs from 'fs/promises';

export interface WriteFileIfMissingResult {
  written: boolean;
  filePath: string;
}

export interface WriteFileIfMissingOptions {
  force?: boolean;
}

/**
 * Atomic "write if missing": uses the `wx` flag so a single syscall both
 * checks-and-creates the file. No TOCTOU window between a separate `stat`
 * and the `writeFile`.
 *
 * When `force` is set, the file is overwritten unconditionally. `written` is
 * `true` whenever bytes were written to disk.
 */
export async function writeFileIfMissing(
  filePath: string,
  content: string,
  options: WriteFileIfMissingOptions = {},
): Promise<WriteFileIfMissingResult> {
  if (options.force) {
    await fs.writeFile(filePath, content);
    return { written: true, filePath };
  }
  try {
    await fs.writeFile(filePath, content, { flag: 'wx' });
    return { written: true, filePath };
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'EEXIST') {
      return { written: false, filePath };
    }
    throw error;
  }
}
