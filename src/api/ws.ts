import {
	type EventClosedListener,
	type EventConnectedListener,
	type EventErrorListener,
	createClient,
} from "graphql-ws";

export const createWSClient = ({
	apiUrl,
	listeners,
}: {
	apiUrl: string;
	listeners?: {
		onConnected?: EventConnectedListener;
		onClosed?: EventClosedListener;
		onError?: EventErrorListener;
	};
}) => {
	const client = createClient({
		url: `wss://${apiUrl}`,
		connectionParams: localStorage.getItem("token")
			? {
					authorization: `Bearer ${localStorage.getItem("token")}`,
				}
			: undefined,
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
