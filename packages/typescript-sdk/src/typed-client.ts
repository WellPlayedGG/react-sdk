import { isNil, omitBy } from "lodash";
import { createClient } from "./generated";
import type { ClientOptions } from "./generated/runtime";

export const createTypedClient = (
	props: {
		apiBaseUrl?: string;
		organizationId: string;
		token?: string;
	} & Omit<ClientOptions, "url" | "headers" | "batch" | "keepalive" | "method">,
) =>
	createClient({
		url: `https://api.warrior.${props.apiBaseUrl ?? "well-played.gg"}/graphql`,
		batch: {
			batchInterval: 100,
			maxBatchSize: 10,
		},
		headers: omitBy(
			{
				"organization-id": props.organizationId,
				authorization: props.token ? `Bearer ${props.token}` : undefined,
			},
			isNil,
		) as Record<string, string>,
		keepalive: true,
		method: "POST",
	});
