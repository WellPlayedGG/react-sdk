import { ApolloClient, HttpLink, from, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { type ErrorResponse, onError } from "@apollo/client/link/error";
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
import { createWSClient } from "./ws";

export const GQL_URL = "api.warrior.well-played.gg/graphql";

export type ClientProps = {
	token: string;
	organizationId: string;
	invalidationPolicies?: InvalidationPolicies;
	handlers?: {
		onError?: (
			error: Omit<ErrorResponse, "operation" | "forward" | "response">,
		) => void;
		webSocket?: {
			onConnected?: EventConnectedListener;
			onClosed?: EventClosedListener;
			onError?: EventErrorListener;
		};
	};
};

export const client = ({
	token,
	organizationId,
	invalidationPolicies,
	handlers,
}: ClientProps) => {
	const cache = new InvalidationPolicyCache({
		invalidationPolicies: {
			...invalidationPolicies,
			timeToLive: invalidationPolicies?.timeToLive ?? 120 * 1000,
			renewalPolicy: invalidationPolicies?.renewalPolicy ?? RenewalPolicy.None,
		},
	});

	persistCacheSync({
		cache,
		storage: new LocalStorageWrapper(window.localStorage),
	});

	const link = split(
		({ query }) => {
			const def = getMainDefinition(query);
			return (
				def.kind === "OperationDefinition" && def.operation === "subscription"
			);
		},
		new GraphQLWsLink(
			createWSClient({ apiUrl: GQL_URL, listeners: handlers?.webSocket }),
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
			onError(({ graphQLErrors, networkError, operation, forward }) => {
				handlers?.onError?.({ graphQLErrors, networkError });

				return forward(operation);
			}),
			new HttpLink({
				uri: `https://${GQL_URL}`,
			}),
		]),
	);

	return new ApolloClient({
		cache,
		link,
		defaultOptions: {
			watchQuery: {
				fetchPolicy: "network-only", // TODO Replace with: "cache-first" and options
				errorPolicy: "ignore",
			},
			query: {
				fetchPolicy: "network-only", // TODO Replace with: "cache-first" and options
				errorPolicy: "all",
			},
			mutate: {
				errorPolicy: "all",
			},
		},
	});
};
