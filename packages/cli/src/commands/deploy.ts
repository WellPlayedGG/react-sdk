import { Command } from 'commander';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { log } from '../utils/logger.js';
import { readAppConfig } from '../config/app-config.js';
import { graphqlRequest } from '../utils/api-client.js';
import { getToken } from '../auth/token-store.js';
import { sleep } from '../utils/sleep.js';

const CREATE_RELEASE_MUTATION = `
  mutation appCreateRelease($marketplaceAppId: ID!, $input: AppCreateReleaseInput!) {
    appCreateRelease(marketplaceAppId: $marketplaceAppId, input: $input) {
      release {
        id
        version
        status
      }
      extensionUploadUrl
      moduleUploadUrl
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

const RELEASE_STATUS_QUERY = `
  query appReleases($marketplaceAppId: ID!) {
    appReleases(marketplaceAppId: $marketplaceAppId) {
      id
      version
      status
      reviewResult
    }
  }
`;

export const deployCommand = new Command('deploy')
  .description('Build and deploy your app to the WellPlayed Marketplace')
  .requiredOption('--app-id <appId>', 'Marketplace App ID')
  .action(async (options: { appId: string }) => {
    try {
    // Validate appId format
    if (!/^[a-zA-Z0-9_-]+$/.test(options.appId)) {
      log.error('Invalid app ID format. Use only letters, numbers, hyphens, and underscores.');
      process.exit(1);
    }

    const token = getToken();
    if (!token) {
      log.error('Not authenticated. Run `wellplayed login` first.');
      process.exit(1);
    }

    const config = readAppConfig();

    log.step(1, `Deploying "${config.displayName}" v${config.version}...`);

    // Build the bundles (user should have already run `npm run build`)
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
        log.error('Extension bundle not found at dist/extension.js. Run `npm run build` first.');
        process.exit(1);
      }
    }

    if (hasModules) {
      try {
        const content = readFileSync(join(process.cwd(), 'dist', 'module.js'));
        moduleBundleSize = content.length;
        log.info(`Module bundle: ${(moduleBundleSize / 1024).toFixed(0)}KB`);
      } catch {
        log.error('Module bundle not found at dist/module.js. Run `npm run build` first.');
        process.exit(1);
      }
    }

    // 1. Create release
    log.step(2, 'Creating release...');
    const manifest = {
      version: '1.0',
      scopes: config.scopes,
      extensions: config.extensions.map((e) => ({
        type: e.type,
        label: e.displayName,
        activePages: e.activePages,
      })),
      webhookEvents: [],
      metafieldNamespaces: [],
      frontendModules: config.platformModules.map((m) => ({
        name: m.name,
        displayName: m.displayName,
        propsSchema: m.propsSchema,
        events: m.events,
      })),
    };

    interface CreateReleaseResult {
      appCreateRelease: {
        release: { id: string; version: string; status: string };
        extensionUploadUrl?: Record<string, unknown>;
        moduleUploadUrl?: Record<string, unknown>;
      };
    }

    const createResult = await graphqlRequest<CreateReleaseResult>(
      CREATE_RELEASE_MUTATION,
      {
        marketplaceAppId: options.appId,
        input: {
          version: config.version,
          manifest,
          hasExtensionBundle: hasExtensions,
          hasModuleBundle: hasModules,
          extensionBundleSize,
          moduleBundleSize,
        },
      },
    );

    const { release, extensionUploadUrl, moduleUploadUrl } =
      createResult.appCreateRelease;

    // 2. Upload bundles
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

    // 3. Finalize release
    const stepNum = 3 + (hasExtensions ? 1 : 0) + (hasModules ? 1 : 0);
    log.step(stepNum, 'Finalizing release...');

    interface FinalizeResult {
      appFinalizeRelease: {
        valid: boolean;
        errors: string[];
      };
    }

    const finalizeResult = await graphqlRequest<FinalizeResult>(
      FINALIZE_RELEASE_MUTATION,
      { releaseId: release.id },
    );

    const validation = finalizeResult.appFinalizeRelease;

    if (!validation.valid) {
      log.error('Bundle validation failed:');
      for (const err of validation.errors) {
        log.error(`  - ${err}`);
      }
      process.exit(1);
    }

    log.step(stepNum + 1, 'Waiting for review...');

    // 4. Poll for review completion
    const maxAttempts = 60;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      await sleep(5000);

      interface ReleasesResult {
        appReleases: Array<{
          id: string;
          version: string;
          status: string;
          reviewResult: Record<string, unknown>;
        }>;
      }

      const statusResult = await graphqlRequest<ReleasesResult>(
        RELEASE_STATUS_QUERY,
        { marketplaceAppId: options.appId },
      );

      const currentRelease = statusResult.appReleases.find(
        (r) => r.id === release.id,
      );

      if (!currentRelease) break;

      if (currentRelease.status === 'APPROVED') {
        log.success(`App v${config.version} published successfully!`);
        return;
      }

      if (currentRelease.status === 'REJECTED') {
        log.error('App review failed:');
        log.error(JSON.stringify(currentRelease.reviewResult, null, 2));
        process.exit(1);
      }

      // Still PENDING_REVIEW, keep polling
      if (attempt % 6 === 0) {
        log.info('Still waiting for review...');
      }
    }

    log.warn('Review is still pending. Check the Developer Portal for status.');
    } catch (error) {
      log.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });

async function uploadToPresigned(
  presigned: Record<string, unknown>,
  content: Buffer,
): Promise<void> {
  const { request } = await import('undici');
  const url = (presigned as { url?: string }).url;
  const fields = (presigned as { fields?: Record<string, string> }).fields ?? {};

  if (!url) {
    throw new Error('Missing presigned URL');
  }

  if (!url.startsWith('https://')) {
    throw new Error('Presigned URL must use HTTPS');
  }

  // Build multipart form
  const boundary = `----WPUpload${Date.now()}`;
  const parts: Buffer[] = [];

  for (const [key, value] of Object.entries(fields)) {
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

