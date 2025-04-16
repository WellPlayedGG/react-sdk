import {
	type EventClosedListener,
	type EventConnectedListener,
	type EventErrorListener,
	createClient,
} from "graphql-ws";
import { isNil, omitBy } from "lodash";
import { getToken } from "./auth";

export const createWSClient = ({
	apiUrl,
	organizationId,
	listeners,
	lazy = false,
	token,
	application,
}: {
	apiUrl: string;
	organizationId: string;
	listeners?: {
		onConnected?: EventConnectedListener;
		onClosed?: EventClosedListener;
		onError?: EventErrorListener;
	};
	lazy?: boolean;
	token?: string;
	application?: {
		clientId: string;
		clientSecret: string;
		oauthUrl: string;
	};
}) => {
	const client = createClient({
		url: `wss://${apiUrl}`,
		lazy,
		connectionParams: async () => {
			const headers: Record<string, string> = {
				"organization-id": organizationId,
			};

			if (token) {
				headers.authorization = `Bearer ${token}`;
			} else if (application) {
				const accessToken = await getToken(application.clientId, application.clientSecret, application.oauthUrl);
				headers.authorization = `Bearer ${accessToken}`;
			}

			return omitBy(headers, isNil);
		},
		keepAlive: 10_000,
	});

	if (listeners) {
		if (listeners.onConnected) {
			client.on("connected", listeners.onConnected);
		}

		if (listeners.onClosed) {
			client.on("closed", listeners.onClosed);
		}

		if (listeners.onError) {
			client.on("error", listeners.onError);
		}
	}

	return client;
};
