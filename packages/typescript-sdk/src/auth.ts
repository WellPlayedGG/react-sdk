import { ApolloLink, Observable } from "@apollo/client";
import axios from "axios";

type TokenResponse = {
	access_token: string;
	expires_in: number;
	token_type: string;
};

type TokenCache = {
	token: string;
	expiresAt: number;
};

const tokenCache = new Map<string, TokenCache>();

export const getToken = async (clientId: string, clientSecret: string, oauthUrl: string): Promise<string> => {
	const cacheKey = `${clientId}:${oauthUrl}`;
	const cachedToken = tokenCache.get(cacheKey);
	const now = Date.now();

	// If we have a valid cached token, use it
	if (cachedToken && cachedToken.expiresAt > now) {
		return cachedToken.token;
	}

	// Otherwise, request a new token
	const response = await axios.post<TokenResponse>(
		`${oauthUrl}/oauth2/token`,
		new URLSearchParams({
			grant_type: "client_credentials",
			client_id: clientId,
			client_secret: clientSecret,
			scope: "offline_access"
		}),
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		}
	);

	const accessToken = response.data.access_token;
	if (!accessToken) {
		throw new Error("No access token received from OAuth2 token endpoint");
	}

	// Cache the new token
	tokenCache.set(cacheKey, {
		token: accessToken,
		expiresAt: now + (response.data.expires_in * 1000) - 60000, // Subtract 1 minute for safety margin
	});

	return accessToken;
};

export const createAuthLink = (application: { clientId: string; clientSecret: string, oauthUrl: string }) => {
  return new ApolloLink((operation, forward) => {
    return new Observable((observer) => {
      getToken(application.clientId, application.clientSecret, application.oauthUrl).then(accessToken => {
        if (!accessToken) {
          observer.error(new Error("No access token received from OAuth2 token endpoint"));
          return;
        }

        // Add the token to the headers
        operation.setContext(({ headers = {} }) => ({
          headers: {
            ...headers,
            authorization: `Bearer ${accessToken}`,
          },
        }));
        
        const subscriber = {
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        };

        forward(operation).subscribe(subscriber);
      }).catch((error: Error) => {
        observer.error(error);
      });
    });
  });
}; 