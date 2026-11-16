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
import type {
	ApiBaseUrl,
	ClientProps,
	TypedClient,
} from "@well-played.gg/typescript-sdk";
import React, { type PropsWithChildren, createContext } from "react";
import {
	type TypedClientConfig,
	useWellPlayedClient,
} from "./use-wellplayed-client";

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
	clientConfig?: Omit<ClientProps, "token" | "organizationId">;
	/**
	 * API Base URL
	 */
	apiBaseUrl?: ApiBaseUrl;
	/**
	 * Typed client configuration
	 */
	typedClientConfig?: TypedClientConfig;
};

type WellPlayedContextValue = {
	organizationId: string;
	apiClient: ApolloClient<NormalizedCacheObject>;
	typedClient: TypedClient;
	accessToken?: string;
};

const WPContext = createContext<WellPlayedContextValue | null>(null);

export const useWellPlayed = () => {
	const context = React.useContext(WPContext);

	if (!context) {
		throw new Error("useWellPlayed must be used within a WellPlayedProvider");
	}

	return context;
};

export const WellPlayedContextProvider = ({
	children,
	...value
}: PropsWithChildren<WellPlayedContextValue>) => (
	<ApolloProvider client={value.apiClient}>
		<WPContext.Provider value={value}>{children}</WPContext.Provider>
	</ApolloProvider>
);

const ProviderWithOidc = ({
	children,
	organizationId,
	...configs
}: PropsWithChildren<Omit<WPConfigProps, "oidcConfig" | "wpAppConfig">>) => {
	const accessToken = useOidcAccessToken()?.accessToken ?? undefined;
	const { apiClient, typedClient } = useWellPlayedClient({
		organizationId,
		token: accessToken,
		...configs,
	});

	return (
		<WellPlayedContextProvider
			organizationId={organizationId}
			apiClient={apiClient}
			typedClient={typedClient}
			accessToken={accessToken}
		>
			{children}
		</WellPlayedContextProvider>
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
