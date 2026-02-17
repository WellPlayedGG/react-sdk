import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  type NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export interface ExtensionClientConfig {
  moduleToken: string;
  marketplaceAppId: string;
  apiBaseUrl?: string;
}

export interface ExtensionClientResult {
  client: ApolloClient<NormalizedCacheObject>;
  setToken: (token: string) => void;
}

export function createExtensionClient(
  config: ExtensionClientConfig,
): ExtensionClientResult {
  let currentToken = config.moduleToken;

  const baseUrl = (config.apiBaseUrl ?? 'api.warrior.well-played.gg').replace(/\/+$/, '');
  const isLocal = /^(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?$/.test(baseUrl);
  const protocol = isLocal ? 'http' : 'https';
  const uri = `${protocol}://${baseUrl}/graphql`;

  const httpLink = new HttpLink({ uri });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      'x-module-token': currentToken,
      'content-type': 'application/json',
    },
  }));

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: { fetchPolicy: 'network-only' },
      query: { fetchPolicy: 'network-only' },
    },
  });

  const setToken = (token: string) => {
    if (!token || token.split('.').length !== 3) return;
    currentToken = token;
  };

  return { client, setToken };
}
