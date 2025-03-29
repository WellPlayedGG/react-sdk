import {
	type Client,
	type EventClosedListener,
	type EventConnectedListener,
	type EventErrorListener,
	createClient,
} from "graphql-ws";
import { isNil, omitBy } from "lodash";

let oldClient: Client | undefined;

export const createWSClient = ({
	apiUrl,
	organizationId,
	listeners,
	lazy = false,
	token,
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
}) => {
	const client = createClient({
		url: `wss://${apiUrl}`,
		lazy,
		connectionParams: omitBy(
			{
				"organization-id": organizationId,
				authorization: token ? `Bearer ${token}` : undefined,
			},
			isNil,
		),
		keepAlive: 10_000,
	});

	if (oldClient) {
		oldClient.dispose();
	}

	oldClient = client;

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
