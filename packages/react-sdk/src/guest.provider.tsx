import type {
	ApiBaseUrl,
	ClientProps,
	ResultOf,
	WellPlayedClient,
} from "@well-played.gg/typescript-sdk";
import {
	type PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import {
	GUEST_ENTER,
	GUEST_LINK_EXCHANGE,
	GUEST_LINK_RESOLVE,
	GUEST_ME,
	GUEST_SESSION_END,
} from "./guest-documents";
import { useWellPlayedClient } from "./use-wellplayed-client";
import { WellPlayedContextProvider } from "./wp.provider";

export type GuestSessionStatus = "none" | "opening" | "active" | "error";

export type GuestLinkContext = {
	id: string;
	purpose: string;
	data: string;
	expiresAt: string;
};

export type GuestSessionInfo = {
	playerId: string;
	origin: "ENTRY" | "LINK";
	expiresAt: string;
	link?: GuestLinkContext;
};

export type GuestEntryInput = {
	email: string;
	firstName: string;
	lastName: string;
};

export type GuestLinkResolution = {
	status: "VALID" | "EXPIRED" | "REVOKED" | "EXHAUSTED" | "INVALID";
	purpose?: string;
	expiresAt?: string;
	firstName?: string;
	data?: string;
};

export type GuestSessionContextValue = {
	status: GuestSessionStatus;
	session?: GuestSessionInfo;
	actingPlayerId?: string;
	errorCode?: string;
	enter: (input: GuestEntryInput) => Promise<void>;
	resolveLink: (token: string) => Promise<GuestLinkResolution>;
	exchangeLink: (token: string) => Promise<void>;
	actAs: (wardPlayerId: string | null) => void;
	end: () => Promise<void>;
};

export type WellPlayedGuestProviderProps = PropsWithChildren<{
	organizationId: string;
	apiBaseUrl?: ApiBaseUrl;
	clientConfig?: Omit<
		ClientProps,
		"token" | "organizationId" | "headers" | "persistCache"
	>;
	storage?: "session" | "memory";
}>;

type Opener = { input: GuestEntryInput } | { linkToken: string };

type GuestState = {
	status: GuestSessionStatus;
	session?: GuestSessionInfo;
	actingWardId?: string;
	errorCode?: string;
};

type GuestRuntime = {
	token?: string;
	actingWardId?: string;
	opener?: Opener;
	reopened: boolean;
	generation: number;
	onSessionInvalid: (sentToken: string) => void;
};

type TokenStore = {
	read: () => string | undefined;
	write: (token: string | undefined) => void;
};

const SESSION_HEADER = "x-guest-session";
const ACTING_HEADER = "x-acting-player-id";
const SESSION_INVALID = "GUEST_SESSION_INVALID";
const NETWORK_ERROR = "NETWORK_ERROR";
const UNKNOWN_ERROR = "UNKNOWN_ERROR";
const WITHOUT_GUEST_HEADERS = {
	headers: { [SESSION_HEADER]: undefined, [ACTING_HEADER]: undefined },
};

const GuestSessionContext = createContext<GuestSessionContextValue | null>(
	null,
);

const openSessionStorage = () => {
	try {
		return window.sessionStorage;
	} catch {
		return undefined;
	}
};

const createTokenStore = (
	storage: "session" | "memory",
	key: string,
): TokenStore => {
	const sessionStorage =
		storage === "session" ? openSessionStorage() : undefined;
	return {
		read: () => {
			try {
				return sessionStorage?.getItem(key) ?? undefined;
			} catch {
				return undefined;
			}
		},
		write: (token) => {
			try {
				if (token) {
					sessionStorage?.setItem(key, token);
				} else {
					sessionStorage?.removeItem(key);
				}
			} catch {}
		},
	};
};

const firstErrorCode = (
	errors: ReadonlyArray<{ extensions?: Record<string, unknown> }> | undefined,
) => {
	const code = errors?.[0]?.extensions?.code;
	return typeof code === "string" ? code : UNKNOWN_ERROR;
};

const toSessionInfo = ({
	playerId,
	origin,
	expiresAt,
	link,
}: ResultOf<typeof GUEST_ENTER>["guestEnter"]): GuestSessionInfo => ({
	playerId,
	origin,
	expiresAt,
	link: link ?? undefined,
});

const runOpener = async (apiClient: WellPlayedClient, opener: Opener) => {
	try {
		if ("input" in opener) {
			const { data, errors } = await apiClient.mutate({
				mutation: GUEST_ENTER,
				variables: { input: opener.input },
				context: WITHOUT_GUEST_HEADERS,
			});
			return { session: data?.guestEnter, errorCode: firstErrorCode(errors) };
		}
		const { data, errors } = await apiClient.mutate({
			mutation: GUEST_LINK_EXCHANGE,
			variables: { token: opener.linkToken },
			context: WITHOUT_GUEST_HEADERS,
		});
		return {
			session: data?.guestLinkExchange,
			errorCode: firstErrorCode(errors),
		};
	} catch {
		return { session: undefined, errorCode: NETWORK_ERROR };
	}
};

export const WellPlayedGuestProvider = ({
	children,
	organizationId,
	apiBaseUrl,
	clientConfig,
	storage = "session",
}: WellPlayedGuestProviderProps) => {
	const tokenStore = useMemo(
		() => createTokenStore(storage, `wp-guest-session:${organizationId}`),
		[storage, organizationId],
	);
	const [state, setState] = useState<GuestState>(() => ({
		status: tokenStore.read() ? "opening" : "none",
	}));
	const [runtime] = useState<GuestRuntime>(() => ({
		reopened: false,
		generation: 0,
		onSessionInvalid: () => undefined,
	}));

	const guestClientConfig = useMemo<
		Omit<ClientProps, "token" | "organizationId">
	>(
		() => ({
			websocket: { lazy: true },
			...clientConfig,
			persistCache: false,
			headers: () => ({
				[SESSION_HEADER]: runtime.token,
				[ACTING_HEADER]: runtime.token && runtime.actingWardId,
			}),
			handlers: {
				...clientConfig?.handlers,
				onError: (error) => {
					const sentToken: unknown =
						error.operation.getContext().headers?.[SESSION_HEADER];
					if (
						typeof sentToken === "string" &&
						error.graphQLErrors?.some(
							(graphQLError) =>
								graphQLError.extensions?.code === SESSION_INVALID,
						)
					) {
						runtime.onSessionInvalid(sentToken);
					}
					return clientConfig?.handlers?.onError?.(error);
				},
			},
		}),
		[clientConfig, runtime],
	);

	const { apiClient, typedClient } = useWellPlayedClient({
		organizationId,
		apiBaseUrl,
		clientConfig: guestClientConfig,
	});

	const actions = useMemo(() => {
		const setToken = (token: string | undefined) => {
			runtime.token = token;
			runtime.actingWardId = undefined;
			tokenStore.write(token);
		};
		const close = (status: "none" | "error", errorCode?: string) => {
			runtime.generation++;
			setToken(undefined);
			setState({ status, errorCode });
		};
		const open = async (opener: Opener, failureStatus: "none" | "error") => {
			const generation = ++runtime.generation;
			setToken(undefined);
			setState({ status: "opening" });
			const { session, errorCode } = await runOpener(apiClient, opener);
			if (generation !== runtime.generation) {
				return;
			}
			if (!session) {
				close(failureStatus, errorCode);
				return;
			}
			setToken(session.token);
			setState({ status: "active", session: toSessionInfo(session) });
		};
		const begin = (opener: Opener) => {
			runtime.opener = opener;
			runtime.reopened = false;
			return open(opener, "error");
		};

		return {
			restore: async () => {
				const storedToken = tokenStore.read();
				if (!storedToken || runtime.generation > 0) {
					return;
				}
				const generation = ++runtime.generation;
				runtime.token = storedToken;
				setState({ status: "opening" });
				const me = await apiClient.query({ query: GUEST_ME }).then(
					({ data }) => data?.guestMe,
					() => undefined,
				);
				if (generation !== runtime.generation) {
					return;
				}
				if (!me) {
					close("none");
					return;
				}
				setState({
					status: "active",
					session: {
						playerId: me.sessionPlayerId,
						origin: me.origin,
						expiresAt: me.expiresAt,
						link: me.link ?? undefined,
					},
				});
			},
			sessionInvalid: (sentToken: string) => {
				if (sentToken !== runtime.token) {
					return;
				}
				if (runtime.opener && !runtime.reopened) {
					runtime.reopened = true;
					void open(runtime.opener, "none");
					return;
				}
				close("none", SESSION_INVALID);
			},
			enter: (input: GuestEntryInput) => begin({ input }),
			exchangeLink: (token: string) => begin({ linkToken: token }),
			resolveLink: async (token: string): Promise<GuestLinkResolution> => {
				const { data, errors } = await apiClient.query({
					query: GUEST_LINK_RESOLVE,
					variables: { token },
					context: WITHOUT_GUEST_HEADERS,
				});
				const view = data?.guestLinkResolve;
				if (!view) {
					throw new Error(firstErrorCode(errors));
				}
				return {
					status: view.status,
					purpose: view.purpose ?? undefined,
					expiresAt: view.expiresAt ?? undefined,
					firstName: view.firstName ?? undefined,
					data: view.data ?? undefined,
				};
			},
			actAs: (wardPlayerId: string | null) => {
				runtime.actingWardId = wardPlayerId ?? undefined;
				setState((current) => ({
					...current,
					actingWardId: wardPlayerId ?? undefined,
				}));
			},
			end: async () => {
				runtime.opener = undefined;
				if (runtime.token) {
					await apiClient
						.mutate({ mutation: GUEST_SESSION_END })
						.catch(() => undefined);
				}
				close("none");
			},
		};
	}, [apiClient, tokenStore, runtime]);

	useEffect(() => {
		runtime.onSessionInvalid = actions.sessionInvalid;
		void actions.restore();
	}, [actions, runtime]);

	const value = useMemo<GuestSessionContextValue>(
		() => ({
			status: state.status,
			session: state.session,
			actingPlayerId: state.actingWardId ?? state.session?.playerId,
			errorCode: state.errorCode,
			enter: actions.enter,
			resolveLink: actions.resolveLink,
			exchangeLink: actions.exchangeLink,
			actAs: actions.actAs,
			end: actions.end,
		}),
		[state, actions],
	);

	return (
		<WellPlayedContextProvider
			organizationId={organizationId}
			apiClient={apiClient}
			typedClient={typedClient}
		>
			<GuestSessionContext.Provider value={value}>
				{children}
			</GuestSessionContext.Provider>
		</WellPlayedContextProvider>
	);
};

export const useGuestSession = () => {
	const context = useContext(GuestSessionContext);

	if (!context) {
		throw new Error(
			"useGuestSession must be used within a WellPlayedGuestProvider",
		);
	}

	return context;
};
