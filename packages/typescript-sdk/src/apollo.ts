import {
	ApolloClient,
	type FetchPolicy,
	HttpLink,
	from,
	split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { type ErrorHandler, onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import {
	InvalidationPolicyCache,
	RenewalPolicy,
} from "@nerdwallet/apollo-cache-policies";
import type { InvalidationPolicies } from "@nerdwallet/apollo-cache-policies/dist/policies/types";
import { LocalStorageWrapper, persistCacheSync } from "apollo3-cache-persist";
import type {
	EventClosedListener,
	EventConnectedListener,
	EventErrorListener,
} from "graphql-ws";
import { isNil, omitBy } from "lodash";
import { createAuthLink } from "./auth";
import { createWSClient } from "./ws";

export type ApiBaseUrl = "well-played.gg" | "stg.well-played.gg";

export type ClientProps = {
	/**
	 * The authentication token to use for the client.
	 */
	token?: string;
	/**
	 * The organization ID to use for the client.
	 */
	organizationId: string;
	/**
	 * The invalidation policies to use for the client.
	 */
	invalidationPolicies?: InvalidationPolicies;
	/**
	 * The fetch policy to use for the client.
	 */
	fetchPolicy?: FetchPolicy;
	/**
	 * The handlers to use for the client.
	 */
	handlers?: {
		onError?: ErrorHandler;
		webSocket?: {
			onConnected?: EventConnectedListener;
			onClosed?: EventClosedListener;
			onError?: EventErrorListener;
		};
	};
	/**
	 * The websocket options to use for the client.
	 */
	websocket?: {
		lazy?: boolean;
	};
	/**
	 * The base URL to use for the client.
	 */
	apiBaseUrl?: ApiBaseUrl;
	/**
	 * Whether the client is running in Server mode.
	 */
	ssr?: boolean;
	/**
	 * The application to use for the client. Only used when running in Server mode as an application (authenticate as the application).
	 */
	application?: {
		clientId: string;
		clientSecret: string;
	};
};

export const createWellPlayedClient = ({
	token,
	organizationId,
	invalidationPolicies,
	handlers,
	fetchPolicy,
	websocket,
	apiBaseUrl,
	ssr,
	application,
}: ClientProps) => {
	const cache = new InvalidationPolicyCache({
		invalidationPolicies: {
			...invalidationPolicies,
			timeToLive: invalidationPolicies?.timeToLive ?? 120 * 1000,
			renewalPolicy: invalidationPolicies?.renewalPolicy ?? RenewalPolicy.None,
		},
	});

	if (!ssr) {
		persistCacheSync({
			cache,
			storage: new LocalStorageWrapper(window.localStorage),
		});
	}

	const graphqlUrl = `api.warrior.${apiBaseUrl ?? "well-played.gg"}/graphql`;
	const oauthUrl = `https://oauth.warrior.${apiBaseUrl ?? "well-played.gg"}`;
	const link = split(
		({ query }) => {
			const def = getMainDefinition(query);
			return (
				def.kind === "OperationDefinition" && def.operation === "subscription"
			);
		},
		new GraphQLWsLink(
			createWSClient({
				apiUrl: graphqlUrl,
				listeners: handlers?.webSocket,
				organizationId,
				lazy: websocket?.lazy,
				token,
				application: application
					? {
							...application,
							oauthUrl,
						}
					: undefined,
			}),
		),
		from([
			setContext(async () => {
				return {
					headers: omitBy(
						{
							"organization-id": organizationId,
							authorization: token ? `Bearer ${token}` : undefined,
						},
						isNil,
					),
				};
			}),
			...(application
				? [
						createAuthLink({
							...application,
							oauthUrl,
						}),
					]
				: []),
			...(handlers?.onError ? [onError(handlers?.onError)] : []),
			new HttpLink({
				uri: `https://${graphqlUrl}`,
			}),
		]),
	);

	// TODO Add batching
	return new ApolloClient({
		cache,
		link,
		ssrMode: ssr,
		defaultOptions: {
			watchQuery: {
				fetchPolicy: fetchPolicy ?? "network-only",
				errorPolicy: "ignore",
			},
			query: {
				fetchPolicy: fetchPolicy ?? "network-only",
				errorPolicy: "all",
			},
			mutate: {
				errorPolicy: "all",
			},
		},
	});
};
