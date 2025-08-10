import { isNil, omit, omitBy } from "lodash";
import { getToken } from "./auth";
import { createClient } from "./generated";
import type { ClientOptions } from "./generated/runtime";

export const createTypedClient = (
	props: {
		apiBaseUrl?: string;
		organizationId: string;
		token?: string;
		application?: {
			clientId: string;
			clientSecret: string;
		};
	} & Omit<ClientOptions, "url" | "headers" | "batch" | "keepalive" | "method">,
) => {
	const apiBaseUrl = props.apiBaseUrl ?? "well-played.gg";
	const url = `https://api.warrior.${apiBaseUrl}/graphql`;
	const oauthUrl = `https://oauth.warrior.${apiBaseUrl}`;
	return createClient({
		url,
		batch: {
			batchInterval: 100,
			maxBatchSize: 10,
		},
		headers: async () => {
			const token =
				props.token ??
				(props.application
					? await getToken(
							props.application.clientId,
							props.application.clientSecret,
							oauthUrl,
						)
					: undefined);
			return omitBy(
				{
					"organization-id": props.organizationId,
					authorization: token ? `Bearer ${token}` : undefined,
				},
				isNil,
			) as Record<string, string>;
		},
		keepalive: true,
		method: "POST",
		...omit(props, "apiBaseUrl", "application", "token", "organizationId"),
	});
};

export type TypedClient = ReturnType<typeof createTypedClient>;
