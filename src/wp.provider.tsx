import {
	type ApolloClient,
	ApolloProvider,
	type NormalizedCacheObject,
} from "@apollo/client";
import type { OidcConfiguration } from "@axa-fr/oidc-client";
import {
	OidcProvider,
	type OidcProviderProps,
	useOidcAccessToken,
} from "@axa-fr/react-oidc";
import React, { createContext, type PropsWithChildren } from "react";
import { type ClientProps, client } from "./api/apollo";

type WPConfigProps = {
	/**
	 * The organization id from the Well Played Console
	 */
	organizationId: string;
	/**
	 * Application configurations from the Well Played Console
	 *
	 * @see https://console.well-played.gg/apps
	 */
	wpAppConfig: {
		/**
		 * The client id of the application
		 */
		client_id: string;
		/**
		 * The redirect uri of the application (should be the same as the one configured on the Well Played Console)
		 */
		redirect_uri: string;
		/**
		 * The scope of the application (if you want to refresh the token and maintain the session, you should add `offline_access`)
		 */
		scope: string;
	};
	/**
	 * OIDC configurations
	 */
	oidcConfig?: Omit<OidcProviderProps, "configuration"> & {
		configuration: Omit<
			OidcConfiguration,
			| "client_id"
			| "redirect_uri"
			| "scope"
			| "response_type"
			| "authority"
			| "authority_configuration"
			| "authority_timeout_wellknowurl_in_millisecond"
			| "authority_time_cache_wellknowurl_in_second"
		>;
	};
	/**
	 * GraphQL client configurations
	 */
	clientConfig?: Omit<ClientProps, "token">;
	/**
	 * API Base URL
	 */
	apiBaseUrl?: string;
};

// Create a context
const WPContext = createContext<{
	organizationId: string;
	apiClient: ApolloClient<NormalizedCacheObject>;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
}>({} as any);

export const useWellPlayed = () => {
	const context = React.useContext(WPContext);

	if (!context) {
		throw new Error("useWellPlayed must be used within a WellPlayedProvider");
	}

	return context;
};

const ProviderWithOidc = ({
	children,
	clientConfig,
	organizationId,
}: PropsWithChildren<Omit<WPConfigProps, "oidcConfig" | "wpAppConfig">>) => {
	const accessToken = useOidcAccessToken();

	const apiClient = client({
		token: accessToken?.accessToken ?? undefined,
		organizationId,
		...clientConfig,
	});

	return (
		<ApolloProvider client={apiClient}>
			<WPContext.Provider
				value={{
					organizationId,
					apiClient,
				}}
			>
				{children}
			</WPContext.Provider>
		</ApolloProvider>
	);
};

export const WellPlayedProvider = ({
	children,
	oidcConfig,
	wpAppConfig,
	...configs
}: PropsWithChildren<WPConfigProps>) => (
	<OidcProvider
		{...oidcConfig}
		configuration={{
			...wpAppConfig,
			...oidcConfig?.configuration,
			authority: `https://oauth.warrior.${configs.apiBaseUrl ?? "well-played.gg"}`,
		}}
	>
		<ProviderWithOidc {...configs}>{children}</ProviderWithOidc>
	</OidcProvider>
);
