import { log } from './logger.js';

/**
 * Standard top-level wrapper for Commander action handlers.
 *
 * Catches any thrown error, logs the message via `log.error`, and exits with
 * code `1`. Use this instead of repeating the same `try/catch + log.error +
 * process.exit(1)` envelope in every command.
 *
 * If the action needs to set a non-zero exit code without throwing (e.g. a
 * GraphQL response with non-empty `errors[]`), set `process.exitCode = 1`
 * inside the callback and return normally — that path is preserved.
 */
export async function runCommand<T>(fn: () => Promise<T>): Promise<T | undefined> {
  try {
    return await fn();
  } catch (error) {
    log.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}
