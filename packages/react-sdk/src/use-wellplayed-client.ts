import {
	type ApiBaseUrl,
	type ClientProps,
	type WellPlayedClient,
	createTypedClient,
	createWellPlayedClient,
} from "@well-played.gg/typescript-sdk";
import { useEffect, useMemo, useRef } from "react";

export type TypedClientConfig = Omit<
	Parameters<typeof createTypedClient>[0],
	"url" | "headers" | "batch" | "keepalive" | "method"
>;

export const useWellPlayedClient = ({
	organizationId,
	token,
	apiBaseUrl,
	clientConfig,
	typedClientConfig,
}: {
	organizationId: string;
	token?: string;
	apiBaseUrl?: ApiBaseUrl;
	clientConfig?: Omit<ClientProps, "token" | "organizationId">;
	typedClientConfig?: TypedClientConfig;
}) => {
	const apiClient = useMemo(
		() =>
			createWellPlayedClient({
				token,
				organizationId,
				...clientConfig,
				apiBaseUrl,
			}),
		[token, organizationId, clientConfig, apiBaseUrl],
	);
	const typedClient = useMemo(
		() =>
			createTypedClient({
				apiBaseUrl,
				organizationId,
				token,
				...typedClientConfig,
			}),
		[apiBaseUrl, organizationId, token, typedClientConfig],
	);
	const retiringClients = useRef(new Set<WellPlayedClient>());

	useEffect(() => {
		retiringClients.current.delete(apiClient);
		return () => {
			retiringClients.current.add(apiClient);
			queueMicrotask(() => {
				if (retiringClients.current.delete(apiClient)) {
					apiClient.dispose();
				}
			});
		};
	}, [apiClient]);

	return { apiClient, typedClient };
};
