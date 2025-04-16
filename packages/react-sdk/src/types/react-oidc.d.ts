declare module "@axa-fr/react-oidc" {
	import type React from "react";

	export interface StringMap {
		[key: string]: string;
	}

	export interface OidcProviderProps {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		configuration: any;
		children?: React.ReactNode;
	}

	export const OidcProvider: React.FC<OidcProviderProps>;

	export function useOidcAccessToken(): { accessToken: string | null };
	export function useOidc(): {
		login: (
			callbackPath?: string | undefined,
			extras?: StringMap,
			silentLoginOnly?: boolean,
		) => Promise<unknown>;
		logout: (
			callbackPath?: string | null | undefined,
			extras?: StringMap,
		) => Promise<void>;
		isAuthenticated: boolean;
	};
	export const OidcSecure: React.FC;
}
