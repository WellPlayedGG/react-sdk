import { Command } from 'commander';
import { graphqlRequest } from '../utils/api-client.js';
import { log } from '../utils/logger.js';
import { runCommand } from '../utils/run-command.js';
import { validateOrgId } from './graphql.js';

const APP_PERMISSIONS_QUERY = `
  query marketplaceApp($id: ID!) {
    marketplaceApp(id: $id) {
      manifest {
        permissions
      }
    }
  }
`;

const INSTALL_APP_MUTATION = `
  mutation installMarketplaceApp($input: InstallMarketplaceAppInput!) {
    installMarketplaceApp(input: $input) {
      id
      status
    }
  }
`;

const INSTALLATIONS_QUERY = `
  query myMarketplaceInstallations($page: PageInfo) {
    myMarketplaceInstallations(page: $page) {
      nodes {
        grantedPermissions
        marketplaceApp {
          slug
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

const PIN_RELEASE_MUTATION = `
  mutation appInstallationPin($input: AppInstallationPinInput!) {
    appInstallationPin(input: $input) {
      id
    }
  }
`;

const CONFIG_SET_MUTATION = `
  mutation appInstallationConfigSet($appSlug: String!, $values: [AppConfigValueInput!]!) {
    appInstallationConfigSet(appSlug: $appSlug, values: $values) {
      key
    }
  }
`;

const ORG_OPTION_DESCRIPTION = 'Organization short-id of the installation (sets the `organization-id` header)';

function parseConfigEntry(entry: string): { key: string; value: string } {
  const separator = entry.indexOf('=');
  if (separator <= 0) {
    throw new Error(`Invalid config entry "${entry}". Use KEY=VALUE.`);
  }
  return { key: entry.slice(0, separator), value: entry.slice(separator + 1) };
}

async function resolveGrants(grant: string[], appId: string, organizationId: string): Promise<string[]> {
  if (grant.length !== 1 || grant[0] !== 'all') return grant;
  const result = await graphqlRequest<{ marketplaceApp: { manifest: { permissions: string[] } } }>(
    APP_PERMISSIONS_QUERY,
    { id: appId },
    { organizationId },
  );
  return result.marketplaceApp.manifest.permissions;
}

interface InstallationsPage {
  myMarketplaceInstallations: {
    nodes: Array<{ grantedPermissions: string[]; marketplaceApp: { slug: string | null } }>;
    pageInfo: { hasNextPage: boolean; endCursor: string | null };
  };
}

async function currentGrants(appSlug: string, organizationId: string): Promise<string[]> {
  let after: string | null = null;
  do {
    const { myMarketplaceInstallations: page }: InstallationsPage = await graphqlRequest<InstallationsPage>(
      INSTALLATIONS_QUERY,
      { page: { first: 100, after } },
      { organizationId },
    );
    const installation = page.nodes.find((node) => node.marketplaceApp.slug === appSlug);
    if (installation) return installation.grantedPermissions;
    after = page.pageInfo.hasNextPage ? page.pageInfo.endCursor : null;
  } while (after);
  throw new Error(`App "${appSlug}" is not installed in this organization.`);
}

export const installCommand = new Command('install')
  .description('Install a marketplace app in an organization')
  .requiredOption('--app-id <appId>', 'Marketplace App ID')
  .requiredOption('-o, --org <shortId>', ORG_OPTION_DESCRIPTION)
  .option('--grant <permissions...>', 'Permissions granted to the app, or `all` for every permission its manifest requests', [])
  .action((options: { appId: string; org: string; grant: string[] }) =>
    runCommand(async () => {
      const organizationId = validateOrgId(options.org);
      const grantedPermissions = await resolveGrants(options.grant, options.appId, organizationId);
      const result = await graphqlRequest<{ installMarketplaceApp: { id: string; status: string } }>(
        INSTALL_APP_MUTATION,
        { input: { marketplaceAppId: options.appId, grantedPermissions } },
        { organizationId },
      );
      log.success(
        `Installed app ${options.appId} (${result.installMarketplaceApp.status}) with ${grantedPermissions.length} granted permissions.`,
      );
    }),
  );

export const pinCommand = new Command('pin')
  .description('Pin an installed app to one of its approved releases')
  .argument('<version>', 'Release version to pin')
  .requiredOption('--app <slug>', 'App slug')
  .requiredOption('-o, --org <shortId>', ORG_OPTION_DESCRIPTION)
  .option('--grant <permissions...>', 'Permissions added by the release, granted for re-consent')
  .action((version: string, options: { app: string; org: string; grant?: string[] }) =>
    runCommand(async () => {
      const organizationId = validateOrgId(options.org);
      const grantedPermissions = options.grant
        ? [...new Set([...(await currentGrants(options.app, organizationId)), ...options.grant])]
        : undefined;
      await graphqlRequest<{ appInstallationPin: { id: string } }>(
        PIN_RELEASE_MUTATION,
        { input: { appSlug: options.app, version, grantedPermissions } },
        { organizationId },
      );
      log.success(`Pinned ${options.app} to v${version}.`);
    }),
  );

export const configCommand = new Command('config')
  .description('Manage the configuration of an installed app')
  .addCommand(
    new Command('set')
      .description('Set configuration values of an installed app')
      .argument('<entries...>', 'KEY=VALUE pairs')
      .requiredOption('--app <slug>', 'App slug')
      .requiredOption('-o, --org <shortId>', ORG_OPTION_DESCRIPTION)
      .action((entries: string[], options: { app: string; org: string }) =>
        runCommand(async () => {
          const values = entries.map(parseConfigEntry);
          await graphqlRequest<{ appInstallationConfigSet: Array<{ key: string }> }>(
            CONFIG_SET_MUTATION,
            { appSlug: options.app, values },
            { organizationId: validateOrgId(options.org) },
          );
          log.success(`Set ${values.length} configuration values on ${options.app}.`);
        }),
      ),
  );
