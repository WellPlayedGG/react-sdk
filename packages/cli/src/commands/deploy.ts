import { Command } from 'commander';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';
import { log } from '../utils/logger.js';
import { runCommand } from '../utils/run-command.js';
import { readAppConfig, type FrontendModuleProp, type WellPlayedConfig } from '../config/app-config.js';
import { graphqlRequest } from '../utils/api-client.js';
import { getToken } from '../auth/token-store.js';
import { sleep } from '../utils/sleep.js';
import { validateOrgId } from './graphql.js';

const CREATE_RELEASE_MUTATION = `
  mutation appCreateRelease($marketplaceAppId: ID!, $input: AppCreateReleaseInput!) {
    appCreateRelease(marketplaceAppId: $marketplaceAppId, input: $input) {
      release {
        id
        version
        status
      }
      extensionUploadUrl {
        url
        fields {
          key
          value
        }
      }
      moduleUploadUrl {
        url
        fields {
          key
          value
        }
      }
    }
  }
`;

const FINALIZE_RELEASE_MUTATION = `
  mutation appFinalizeRelease($releaseId: ID!) {
    appFinalizeRelease(releaseId: $releaseId) {
      valid
      errors
    }
  }
`;

const PUBLISH_APP_MUTATION = `
  mutation publishMarketplaceApp($input: PublishMarketplaceAppInput!) {
    publishMarketplaceApp(input: $input) {
      id
    }
  }
`;

const UPDATE_APP_MUTATION = `
  mutation updateMarketplaceApp($id: ID!, $input: UpdateMarketplaceAppInput!) {
    updateMarketplaceApp(id: $id, input: $input) {
      id
    }
  }
`;

const RELEASE_STATUS_QUERY = `
  query appReleases($marketplaceAppId: ID!) {
    appReleases(marketplaceAppId: $marketplaceAppId) {
      id
      version
      status
      reviewResult {
        passed
        checks {
          name
          passed
          details
        }
      }
    }
    marketplaceApp(id: $marketplaceAppId) {
      status
    }
  }
`;

interface PresignedUrl {
  url: string;
  fields: Array<{ key: string; value: string }>;
}

type MarketplaceAppReleaseStatus = 'PENDING_REVIEW' | 'APPROVED' | 'REJECTED';

type MarketplaceAppStatus = 'DRAFT' | 'IN_REVIEW' | 'PUBLISHED' | 'REJECTED' | 'SUSPENDED';

interface ReleaseStatusResult {
  appReleases: Array<{
    id: string;
    version: string;
    status: MarketplaceAppReleaseStatus;
    reviewResult: {
      passed: boolean;
      checks: Array<{ name: string; passed: boolean; details: string | null }>;
    } | null;
  }>;
  marketplaceApp: { status: MarketplaceAppStatus };
}

type ExtensionPointType = 'ADMIN_NAVIGATION' | 'DASHBOARD_WIDGET' | 'TAB';

const EXTENSION_POINT_TYPES = new Map<string, ExtensionPointType>([
  ['tab', 'TAB'],
  ['admin-navigation', 'ADMIN_NAVIGATION'],
  ['dashboard-widget', 'DASHBOARD_WIDGET'],
]);

interface AppManifestInput {
  version: string;
  permissions: string[];
  extensions: Array<{ type: ExtensionPointType; label: string; activePages: string[] }>;
  webhookEvents: string[];
  metafieldNamespaces: string[];
  frontendModules: Array<{
    name: string;
    displayName: string;
    version: string;
    events: Array<{ name: string }>;
    propsSchema: Array<Omit<FrontendModuleProp, 'defaultValue'> & { key: string; defaultValue?: string }>;
  }>;
}

function toExtensionPointType(extension: WellPlayedConfig['extensions'][number]): ExtensionPointType {
  const type = EXTENSION_POINT_TYPES.get(extension.type);
  if (!type) {
    throw new Error(
      `Extension "${extension.name}" has type "${extension.type}", which WellPlayed does not support. Use one of: ${[...EXTENSION_POINT_TYPES.keys()].join(', ')}.`,
    );
  }
  return type;
}

function toManifestInput(config: WellPlayedConfig): AppManifestInput {
  return {
    version: '1.0',
    permissions: config.scopes,
    extensions: config.extensions.map((e) => ({
      type: toExtensionPointType(e),
      label: e.displayName,
      activePages: e.activePages,
    })),
    webhookEvents: [],
    metafieldNamespaces: [],
    frontendModules: config.platformModules.map((m) => ({
      name: m.name,
      displayName: m.displayName,
      version: config.version,
      events: m.events.map((name) => ({ name })),
      propsSchema: Object.entries(m.propsSchema).map(([key, prop]) => ({
        key,
        type: prop.type,
        label: prop.label,
        description: prop.description,
        required: prop.required ?? false,
        defaultValue: prop.defaultValue === undefined ? undefined : String(prop.defaultValue),
        options: prop.options,
        param: prop.param,
      })),
    })),
  };
}

const LOCKED_LISTING_STATUSES: ReadonlyArray<MarketplaceAppStatus> = ['SUSPENDED', 'REJECTED'];

type Visibility = 'PUBLIC' | 'PRIVATE';

type ReleaseFileKind = 'FUNCTION' | 'OPERATION' | 'EMAIL_TEMPLATE';

interface ReleaseFileInput {
  kind: ReleaseFileKind;
  name: string;
  content: string;
}

interface ManifestV11Config {
  manifest: Record<string, unknown>;
  releaseVersion: string;
  name: string | undefined;
  description: string | undefined;
  listing: { slug: string; visibility: Visibility | undefined; allowedOrganizationIds: string[] | undefined };
}

interface DeployOptions {
  appId?: string;
  organizationAppId?: string;
  org: string;
  dryRun?: boolean;
}

interface RequestOptions {
  organizationId: string;
}

interface CreateReleaseResult {
  appCreateRelease: {
    release: { id: string; version: string; status: string };
    extensionUploadUrl: PresignedUrl | null;
    moduleUploadUrl: PresignedUrl | null;
  };
}

const MANIFEST_V11_KEYS = new Set([
  'version',
  'permissions',
  'extensions',
  'webhookUrl',
  'webhookEvents',
  'metafieldNamespaces',
  'frontendModules',
  'config',
  'customPermissions',
  'storage',
  'operations',
  'emailTemplates',
  'auditTypes',
  'functions',
  'codeAuthorized',
]);

const RELEASE_FILE_BLOCKS: ReadonlyArray<[string, ReleaseFileKind]> = [
  ['functions', 'FUNCTION'],
  ['operations', 'OPERATION'],
  ['emailTemplates', 'EMAIL_TEMPLATE'],
];

const ID_FORMAT = /^[a-zA-Z0-9_-]+$/;

const isString = (value: unknown): value is string => typeof value === 'string';

const isVisibility = (value: unknown): value is Visibility => value === 'PUBLIC' || value === 'PRIVATE';

const isStringArray = (value: unknown): value is string[] => Array.isArray(value) && value.every(isString);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function listOf(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function readOptional<T>(
  raw: Record<string, unknown>,
  key: string,
  isValid: (value: unknown) => value is T,
  expected: string,
): T | undefined {
  const value = raw[key];
  if (value === undefined || isValid(value)) return value;
  throw new Error(`Invalid wellplayed.json: "${key}" must be ${expected}.`);
}

function readRequiredString(raw: Record<string, unknown>, key: string): string {
  const value = readOptional(raw, key, isString, 'a string');
  if (!value) throw new Error(`Invalid wellplayed.json: missing "${key}".`);
  return value;
}

function readManifestV11(dir: string): ManifestV11Config | undefined {
  const path = join(dir, 'wellplayed.json');
  if (!existsSync(path)) return undefined;
  const raw: unknown = JSON.parse(readFileSync(path, 'utf-8'));
  if (!isRecord(raw) || raw.version !== '1.1') return undefined;
  return {
    manifest: Object.fromEntries(Object.entries(raw).filter(([key]) => MANIFEST_V11_KEYS.has(key))),
    releaseVersion: readRequiredString(raw, 'releaseVersion'),
    name: readOptional(raw, 'name', isString, 'a string'),
    description: readOptional(raw, 'description', isString, 'a string'),
    listing: {
      slug: readRequiredString(raw, 'slug'),
      visibility: readOptional(raw, 'visibility', isVisibility, 'PUBLIC or PRIVATE'),
      allowedOrganizationIds: readOptional(raw, 'allowedOrganizations', isStringArray, 'a list of organization short-ids'),
    },
  };
}

function readReleaseFile(dir: string, name: string): string {
  const path = resolve(dir, name);
  if (!path.startsWith(dir + sep)) {
    throw new Error(`Release file "${name}" is outside ${dir}.`);
  }
  return readFileSync(path, 'utf-8');
}

function collectReleaseFiles(manifest: Record<string, unknown>, dir: string): ReleaseFileInput[] {
  const files = new Map<string, ReleaseFileInput>();
  for (const [block, kind] of RELEASE_FILE_BLOCKS) {
    for (const entry of listOf(manifest[block])) {
      if (!isRecord(entry) || !isString(entry.file)) {
        throw new Error(`Invalid wellplayed.json: every "${block}" entry needs a "file".`);
      }
      const key = `${kind}:${entry.file}`;
      if (!files.has(key)) {
        files.set(key, { kind, name: entry.file, content: readReleaseFile(dir, entry.file) });
      }
    }
  }
  return [...files.values()];
}

async function upsertListing(
  config: ManifestV11Config,
  options: DeployOptions,
  requestOptions: RequestOptions,
): Promise<string> {
  if (options.appId) {
    await graphqlRequest<{ updateMarketplaceApp: { id: string } }>(
      UPDATE_APP_MUTATION,
      { id: options.appId, input: config.listing },
      requestOptions,
    );
    return options.appId;
  }
  if (!options.organizationAppId) {
    throw new Error('Pass --app-id to update the marketplace listing, or --organization-app-id to publish it.');
  }
  if (!config.name || !config.description) {
    throw new Error('Publishing needs "name" and "description" in wellplayed.json.');
  }
  const published = await graphqlRequest<{ publishMarketplaceApp: { id: string } }>(
    PUBLISH_APP_MUTATION,
    {
      input: {
        ...config.listing,
        organizationAppId: options.organizationAppId,
        manifest: config.manifest,
        name: config.name,
        description: config.description,
        shortDescription: config.description,
        version: config.releaseVersion,
      },
    },
    requestOptions,
  );
  return published.publishMarketplaceApp.id;
}

async function deployManifestV11(
  config: ManifestV11Config,
  options: DeployOptions,
  requestOptions: RequestOptions,
): Promise<void> {
  const files = collectReleaseFiles(config.manifest, process.cwd());
  log.step(1, `Deploying "${config.listing.slug}" v${config.releaseVersion} with ${files.length} files...`);
  for (const file of files) {
    log.info(`${file.kind} ${file.name} ${Buffer.byteLength(file.content)} B`);
  }
  if (options.dryRun) return;

  log.step(2, 'Updating the marketplace listing...');
  const appId = await upsertListing(config, options, requestOptions);

  log.step(3, 'Creating release...');
  const createResult = await graphqlRequest<CreateReleaseResult>(
    CREATE_RELEASE_MUTATION,
    {
      marketplaceAppId: appId,
      input: {
        version: config.releaseVersion,
        manifest: config.manifest,
        hasExtensionBundle: false,
        hasModuleBundle: false,
        files,
      },
    },
    requestOptions,
  );

  await finalizeAndAwaitReview(appId, createResult.appCreateRelease.release.id, config.releaseVersion, 4, requestOptions);
}

async function finalizeAndAwaitReview(
  appId: string,
  releaseId: string,
  version: string,
  step: number,
  requestOptions: RequestOptions,
): Promise<void> {
  log.step(step, 'Finalizing release...');

  interface FinalizeResult {
    appFinalizeRelease: {
      valid: boolean;
      errors: string[];
    };
  }

  const finalizeResult = await graphqlRequest<FinalizeResult>(
    FINALIZE_RELEASE_MUTATION,
    { releaseId },
    requestOptions,
  );

  const validation = finalizeResult.appFinalizeRelease;

  if (!validation.valid) {
    for (const err of validation.errors) {
      log.error(`  - ${err}`);
    }
    throw new Error('Bundle validation failed.');
  }

  log.step(step + 1, 'Waiting for review...');

  const maxAttempts = 60;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    await sleep(5000);

    const statusResult = await graphqlRequest<ReleaseStatusResult>(
      RELEASE_STATUS_QUERY,
      { marketplaceAppId: appId },
      requestOptions,
    );

    const currentRelease = statusResult.appReleases.find(
      (r) => r.id === releaseId,
    );

    if (!currentRelease) break;

    if (currentRelease.status === 'APPROVED') {
      const listingStatus = statusResult.marketplaceApp.status;
      if (LOCKED_LISTING_STATUSES.includes(listingStatus)) {
        throw new Error(
          `App v${version} passed review, but its marketplace listing is ${listingStatus}, so nothing was published.`,
        );
      }
      log.success(`App v${version} published successfully!`);
      return;
    }

    if (currentRelease.status === 'REJECTED') {
      for (const check of currentRelease.reviewResult?.checks ?? []) {
        if (!check.passed) log.error(`  - ${check.name}: ${check.details ?? ''}`);
      }
      throw new Error('App review failed.');
    }

    if (attempt % 6 === 0) {
      log.info('Still waiting for review...');
    }
  }

  log.warn('Review is still pending. Check the Developer Portal for status.');
}

export const deployCommand = new Command('deploy')
  .description('Build and deploy your app to the WellPlayed Marketplace')
  .option('--app-id <appId>', 'Marketplace App ID')
  .option('--organization-app-id <organizationAppId>', 'Organization app to publish when the app has no marketplace listing yet (manifest 1.1)')
  .requiredOption('-o, --org <shortId>', 'Organization short-id that owns the app (sets the `organization-id` header)')
  .option('--dry-run', 'Print the release files and their sizes without calling the API (manifest 1.1)')
  .action((options: DeployOptions) =>
    runCommand(async () => {
      for (const id of [options.appId, options.organizationAppId]) {
        if (id !== undefined && !ID_FORMAT.test(id)) {
          throw new Error('Invalid app ID format. Use only letters, numbers, hyphens, and underscores.');
        }
      }
      const requestOptions = { organizationId: validateOrgId(options.org) };

      if (!options.dryRun && !getToken()) {
        throw new Error('Not authenticated. Run `wellplayed login` first.');
      }

      const manifestV11 = readManifestV11(process.cwd());
      if (manifestV11) {
        await deployManifestV11(manifestV11, options, requestOptions);
        return;
      }

      const appId = options.appId;
      if (!appId) {
        throw new Error('Missing --app-id.');
      }

      const config = readAppConfig();

      log.step(1, `Deploying "${config.displayName}" v${config.version}...`);

      const hasExtensions = config.extensions.length > 0;
      const hasModules = config.platformModules.length > 0;

      let extensionBundleSize: number | undefined;
      let moduleBundleSize: number | undefined;

      if (hasExtensions) {
        try {
          const content = readFileSync(join(process.cwd(), 'dist', 'extension.js'));
          extensionBundleSize = content.length;
          log.info(`Extension bundle: ${(extensionBundleSize / 1024).toFixed(0)}KB`);
        } catch {
          throw new Error('Extension bundle not found at dist/extension.js. Run `npm run build` first.');
        }
      }

      if (hasModules) {
        try {
          const content = readFileSync(join(process.cwd(), 'dist', 'module.js'));
          moduleBundleSize = content.length;
          log.info(`Module bundle: ${(moduleBundleSize / 1024).toFixed(0)}KB`);
        } catch {
          throw new Error('Module bundle not found at dist/module.js. Run `npm run build` first.');
        }
      }

      if (options.dryRun) return;

      log.step(2, 'Creating release...');
      const manifest = toManifestInput(config);

      const createResult = await graphqlRequest<CreateReleaseResult>(
        CREATE_RELEASE_MUTATION,
        {
          marketplaceAppId: appId,
          input: {
            version: config.version,
            manifest,
            hasExtensionBundle: hasExtensions,
            hasModuleBundle: hasModules,
            extensionBundleSize,
            moduleBundleSize,
          },
        },
        requestOptions,
      );

      const { release, extensionUploadUrl, moduleUploadUrl } =
        createResult.appCreateRelease;

      if (hasExtensions && extensionUploadUrl) {
        log.step(3, 'Uploading extension bundle...');
        const content = readFileSync(join(process.cwd(), 'dist', 'extension.js'));
        await uploadToPresigned(extensionUploadUrl, content);
      }

      if (hasModules && moduleUploadUrl) {
        log.step(hasExtensions ? 4 : 3, 'Uploading module bundle...');
        const content = readFileSync(join(process.cwd(), 'dist', 'module.js'));
        await uploadToPresigned(moduleUploadUrl, content);
      }

      const stepNum = 3 + (hasExtensions ? 1 : 0) + (hasModules ? 1 : 0);
      await finalizeAndAwaitReview(appId, release.id, config.version, stepNum, requestOptions);
    }),
  );

async function uploadToPresigned(
  presigned: PresignedUrl,
  content: Buffer,
): Promise<void> {
  const { request } = await import('undici');
  const { url, fields } = presigned;

  if (!url) {
    throw new Error('Missing presigned URL');
  }

  if (!url.startsWith('https://')) {
    throw new Error('Presigned URL must use HTTPS');
  }

  // Build multipart form
  const boundary = `----WPUpload${Date.now()}`;
  const parts: Buffer[] = [];

  for (const { key, value } of [...fields, { key: 'Content-Type', value: 'application/javascript' }]) {
    parts.push(
      Buffer.from(
        `--${boundary}\r\nContent-Disposition: form-data; name="${key}"\r\n\r\n${value}\r\n`,
      ),
    );
  }

  parts.push(
    Buffer.from(
      `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="bundle.js"\r\nContent-Type: application/javascript\r\n\r\n`,
    ),
  );
  parts.push(content);
  parts.push(Buffer.from(`\r\n--${boundary}--\r\n`));

  const body = Buffer.concat(parts);

  const response = await request(url, {
    method: 'POST',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      'Content-Length': String(body.length),
    },
    body,
  });

  if (response.statusCode >= 400) {
    const text = await response.body.text();
    throw new Error(`Upload failed (${response.statusCode}): ${text}`);
  }
}

