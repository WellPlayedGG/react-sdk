import { graphqlRequest } from '../../utils/api-client.js';

export interface UserOrganization {
  id: string;
  name: string;
}

interface UserOrganizationsResult {
  userOrganizations: UserOrganization[];
}

const USER_ORGANIZATIONS_QUERY = /* GraphQL */ `
  query userOrganizations {
    userOrganizations {
      id
      name
    }
  }
`;

/**
 * Lists organizations the current user owns or is a member of. This query is
 * decorated `@WithoutOrganization()` server-side, so no `organization-id`
 * header is required.
 */
export async function listUserOrganizations(): Promise<UserOrganization[]> {
  const result = await graphqlRequest<UserOrganizationsResult>(USER_ORGANIZATIONS_QUERY);
  return result.userOrganizations;
}

export interface CreateOrganizationAppInput {
  name: string;
  description: string;
  redirectUrls: string[];
  logoutRedirectUrls: string[];
  loginUrl: string;
  consentUrl: string;
  requiresConsent: boolean;
  public: boolean;
}

export interface CreatedOrganizationApp {
  id: string;
  name: string;
}

interface CreateOrganizationAppResult {
  createOrganizationApp: CreatedOrganizationApp;
}

/**
 * Per the GraphQL schema, `OrganizationApp.id` IS the OAuth2 client ID
 * ("Unique identifier of the app (also the OAuth2 client ID)"). Public SPA
 * clients do not have/return a `secret`. We extract `id` as the client ID.
 */
const CREATE_ORGANIZATION_APP_MUTATION = /* GraphQL */ `
  mutation createOrganizationApp($input: CreateOrganizationAppInput!) {
    createOrganizationApp(input: $input) {
      id
      name
    }
  }
`;

export async function createOrganizationApp(
  input: CreateOrganizationAppInput,
  organizationId: string,
): Promise<CreatedOrganizationApp> {
  const result = await graphqlRequest<CreateOrganizationAppResult>(
    CREATE_ORGANIZATION_APP_MUTATION,
    { input },
    { organizationId },
  );
  return result.createOrganizationApp;
}
