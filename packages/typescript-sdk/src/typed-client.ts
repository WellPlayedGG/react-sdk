import { isNil, omitBy } from "lodash";
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
	const url = props.apiBaseUrl
		? `https://api.warrior.${props.apiBaseUrl}/graphql`
		: undefined;
	const oauthUrl = `https://oauth.warrior.${props.apiBaseUrl ?? "well-played.gg"}`;
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
	});
};

export type TypedClient = ReturnType<typeof createTypedClient>;
