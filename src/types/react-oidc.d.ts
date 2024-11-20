declare module "@axa-fr/react-oidc" {
	import type React from "react";

	export interface OidcProviderProps {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		configuration: any;
		children?: React.ReactNode;
	}

	export const OidcProvider: React.FC<OidcProviderProps>;

	export function useOidcAccessToken(): { accessToken: string | null };
	export const OidcSecure: React.FC;
}
