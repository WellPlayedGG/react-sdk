import { Command } from 'commander';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { graphqlRequest, graphqlRequestRaw } from '../utils/api-client.js';
import { runCommand } from '../utils/run-command.js';

interface GraphqlCommandOptions {
  file?: string;
  stdin?: boolean;
  field: ParsedField[];
  rawField: ParsedField[];
  variables?: string;
  org?: string;
  header: string[];
  dataOnly?: boolean;
}

interface ParsedField {
  /** Dotted path (e.g. `input.name`) split into segments. */
  path: string[];
  value: unknown;
}

/**
 * Build a fresh `graphql` Commander instance. Exported as a factory because
 * Commander persists parsed option values on each instance — sharing one
 * across tests (or any second invocation) leaks state.
 */
export function createGraphqlCommand(): Command {
  return new Command('graphql')
    .description('Run a GraphQL query or mutation against the WellPlayed API')
    .argument('[query]', 'Inline GraphQL document. Omit to read from --file or stdin.')
    .option('-f, --file <path>', 'Read the GraphQL document from a file')
    .option('--stdin', 'Read the GraphQL document from stdin')
    .option(
      '-F, --field <key=value>',
      'Add a typed variable. Value is JSON-coerced (numbers, booleans, null, JSON literals). Use `key=@file.json` to inline a JSON file. Dotted keys (`input.name=Foo`) build nested objects. Repeatable.',
      collectField,
      [] as ParsedField[],
    )
    .option(
      '--raw-field <key=value>',
      'Add a string variable (no JSON coercion). Repeatable.',
      collectRawField,
      [] as ParsedField[],
    )
    .option('--variables <path>', 'Read variables from a JSON file (merged under -F/--raw-field)')
    .option('-o, --org <shortId>', 'Organization short-id (sets the `organization-id` header)')
    .option(
      '-H, --header <key:value>',
      'Add an extra HTTP header. Repeatable. `Authorization` and `Content-Type` are reserved.',
      collectHeader,
      [] as string[],
    )
    .option('--data-only', 'Print only the `data` payload. Throws on any GraphQL errors.')
    .action((queryArg: string | undefined, options: GraphqlCommandOptions) =>
      runCommand(async () => {
        const query = await resolveQuery(queryArg, options);
        const variables = buildVariables(options);
        const headers = parseHeaders(options.header ?? []);
        const organizationId = options.org !== undefined ? validateOrgId(options.org) : undefined;

        if (options.dataOnly) {
          const data = await graphqlRequest<unknown>(query, variables, {
            organizationId,
            headers,
          });
          process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
          return;
        }

        const envelope = await graphqlRequestRaw<unknown>(query, variables, {
          organizationId,
          headers,
        });
        process.stdout.write(`${JSON.stringify(envelope, null, 2)}\n`);
        if (envelope.errors && envelope.errors.length > 0) {
          process.exitCode = 1;
        }
      }),
    );
}

export const graphqlCommand = createGraphqlCommand();

/* ------------------------------------------------------------------ */
/* Query resolution                                                    */
/* ------------------------------------------------------------------ */

async function resolveQuery(
  queryArg: string | undefined,
  options: GraphqlCommandOptions,
): Promise<string> {
  // A non-TTY stdin (a piped redirect) is treated as a source ONLY when no
  // other source is provided — that way `wellplayed graphql 'query' < irrelevant`
  // doesn't silently swallow the pipe over the explicit positional.
  const hasPositional = queryArg !== undefined;
  const hasFile = options.file !== undefined;
  const hasExplicitStdin = options.stdin === true;
  const hasImplicitStdin =
    !hasPositional && !hasFile && !hasExplicitStdin && process.stdin.isTTY === false;

  const sources = [
    hasPositional ? 'positional' : null,
    hasFile ? 'file' : null,
    hasExplicitStdin ? 'stdin' : null,
  ].filter((s): s is string => s !== null);

  if (sources.length > 1) {
    throw new Error(
      `Provide the GraphQL document via exactly one of: positional argument, --file, or --stdin (got: ${sources.join(', ')})`,
    );
  }

  if (hasPositional) {
    return queryArg;
  }
  if (hasFile && options.file !== undefined) {
    return readCwdFile(options.file);
  }
  if (hasExplicitStdin || hasImplicitStdin) {
    return readStdin();
  }
  throw new Error(
    'No GraphQL document provided. Pass it as a positional argument, via --file <path>, or pipe it on stdin.',
  );
}

function readStdin(): Promise<string> {
  return new Promise((resolvePromise, rejectPromise) => {
    const chunks: Buffer[] = [];
    const onData = (chunk: Buffer): void => {
      chunks.push(chunk);
    };
    const cleanup = (): void => {
      process.stdin.off('data', onData);
    };
    process.stdin.on('data', onData);
    process.stdin.once('end', () => {
      cleanup();
      resolvePromise(Buffer.concat(chunks).toString('utf-8'));
    });
    process.stdin.once('error', (err) => {
      cleanup();
      rejectPromise(err);
    });
  });
}

function readCwdFile(filePath: string): string {
  return readFileSync(resolve(process.cwd(), filePath), 'utf-8');
}

/* ------------------------------------------------------------------ */
/* Variable assembly                                                   */
/* ------------------------------------------------------------------ */

function buildVariables(options: GraphqlCommandOptions): Record<string, unknown> | undefined {
  const fromFile = options.variables ? loadVariablesFile(options.variables) : {};
  const result: Record<string, unknown> = { ...fromFile };

  // raw-field first, then field — field wins on conflicts (matches `gh`).
  for (const f of options.rawField ?? []) {
    setDeep(result, f.path, f.value);
  }
  for (const f of options.field ?? []) {
    setDeep(result, f.path, f.value);
  }

  return Object.keys(result).length === 0 ? undefined : result;
}

function loadVariablesFile(path: string): Record<string, unknown> {
  const raw = readCwdFile(path);
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(
      `--variables file ${path} is not valid JSON: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error(`--variables file ${path} must contain a JSON object at the top level`);
  }
  return parsed as Record<string, unknown>;
}

const FORBIDDEN_KEYS: ReadonlySet<string> = new Set(['__proto__', 'constructor', 'prototype']);

function setDeep(target: Record<string, unknown>, path: string[], value: unknown): void {
  for (const segment of path) {
    if (FORBIDDEN_KEYS.has(segment)) {
      throw new Error(
        `Forbidden key "${segment}" in variable path "${path.join('.')}" (would mutate the prototype chain).`,
      );
    }
  }
  let cursor: Record<string, unknown> = target;
  for (let i = 0; i < path.length - 1; i += 1) {
    const key = path[i];
    if (key === undefined) return;
    const existing = cursor[key];
    if (typeof existing !== 'object' || existing === null || Array.isArray(existing)) {
      const next: Record<string, unknown> = {};
      cursor[key] = next;
      cursor = next;
    } else {
      cursor = existing as Record<string, unknown>;
    }
  }
  const last = path[path.length - 1];
  if (last === undefined) return;
  cursor[last] = value;
}

/* ------------------------------------------------------------------ */
/* Flag collectors                                                     */
/* ------------------------------------------------------------------ */

export function collectField(
  value: string,
  previous: ParsedField[] | undefined,
): ParsedField[] {
  return [...(previous ?? []), parseFieldFlag(value, /* coerce */ true)];
}

export function collectRawField(
  value: string,
  previous: ParsedField[] | undefined,
): ParsedField[] {
  return [...(previous ?? []), parseFieldFlag(value, /* coerce */ false)];
}

function collectHeader(value: string, previous: string[] | undefined): string[] {
  return [...(previous ?? []), value];
}

export function parseFieldFlag(input: string, coerceJson: boolean): ParsedField {
  const eqIndex = input.indexOf('=');
  if (eqIndex <= 0) {
    throw new Error(`Invalid field "${input}". Expected key=value.`);
  }
  const rawKey = input.slice(0, eqIndex);
  const rawValue = input.slice(eqIndex + 1);
  const path = rawKey.split('.').filter((p) => p.length > 0);
  if (path.length === 0) {
    throw new Error(`Invalid field key in "${input}".`);
  }

  let value: unknown;
  if (rawValue.startsWith('@')) {
    const filePath = rawValue.slice(1);
    if (filePath.length === 0) {
      throw new Error(`Invalid field "${input}". Expected a path after '@'.`);
    }
    const fileContent = readCwdFile(filePath);
    if (coerceJson) {
      try {
        value = JSON.parse(fileContent);
      } catch (err) {
        throw new Error(
          `Field "${rawKey}=@${filePath}" file is not valid JSON: ${err instanceof Error ? err.message : String(err)}`,
        );
      }
    } else {
      value = fileContent;
    }
  } else if (coerceJson) {
    value = coerceScalar(rawKey, rawValue);
  } else {
    value = rawValue;
  }

  return { path, value };
}

/**
 * Scalar coercion rules (mirrors `gh api -F`):
 *  - "null" / "true" / "false" → JSON literal
 *  - integer / float → number
 *  - "[...]" / "{...}" → parsed JSON (throws on malformed — does not silently
 *    fall back to a string, since "looks like JSON but doesn't parse" is
 *    almost always a typo the user wants to know about)
 *  - everything else → string verbatim
 */
function coerceScalar(rawKey: string, raw: string): unknown {
  if (raw === 'null') return null;
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  if (raw.length > 0 && /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(raw)) {
    const n = Number(raw);
    if (Number.isFinite(n)) return n;
  }
  if ((raw.startsWith('{') && raw.endsWith('}')) || (raw.startsWith('[') && raw.endsWith(']'))) {
    try {
      return JSON.parse(raw);
    } catch (err) {
      throw new Error(
        `Field "${rawKey}" looks like a JSON literal but failed to parse: ${err instanceof Error ? err.message : String(err)}. Use --raw-field to keep it as a string.`,
      );
    }
  }
  return raw;
}

/* ------------------------------------------------------------------ */
/* Header / org-id parsing                                             */
/* ------------------------------------------------------------------ */

const RESERVED_HEADERS: ReadonlySet<string> = new Set(['authorization', 'content-type']);

/**
 * RFC 7230 token: VCHAR except delimiters and whitespace. We restrict to a
 * conservative subset so users can't smuggle CR/LF (response-splitting / header
 * injection) through `-H` or `-o`.
 */
const HEADER_NAME_RE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
const HEADER_VALUE_RE = /^[\t\x20-\x7E]*$/;
const ORG_ID_RE = /^[A-Za-z0-9_-]+$/;

export function parseHeaders(rawHeaders: string[]): Record<string, string> | undefined {
  if (rawHeaders.length === 0) return undefined;
  const out: Record<string, string> = {};
  for (const raw of rawHeaders) {
    const colon = raw.indexOf(':');
    if (colon <= 0) {
      throw new Error(`Invalid --header "${raw}". Expected "Key: value".`);
    }
    const key = raw.slice(0, colon).trim();
    const value = raw.slice(colon + 1).trim();
    if (key.length === 0) {
      throw new Error(`Invalid --header "${raw}". Header name is empty.`);
    }
    if (!HEADER_NAME_RE.test(key)) {
      throw new Error(`Invalid --header "${raw}". Header name contains illegal characters.`);
    }
    if (!HEADER_VALUE_RE.test(value)) {
      throw new Error(`Invalid --header "${raw}". Header value contains illegal characters (CR/LF or non-ASCII).`);
    }
    if (RESERVED_HEADERS.has(key.toLowerCase())) {
      throw new Error(`Header "${key}" is reserved by the CLI and cannot be overridden.`);
    }
    out[key] = value;
  }
  return out;
}

export function validateOrgId(orgId: string): string {
  if (!ORG_ID_RE.test(orgId)) {
    throw new Error(
      `Invalid --org "${orgId}". Organization short-ids must match ${ORG_ID_RE}.`,
    );
  }
  return orgId;
}
