# WellPlayed Typescript SDK

This is the official [WellPlayed](https://well-played.gg) Typescript SDK. It provides a set of tools to interract with WellPlayed's API.

## Installation

```bash
yarn add @well-played.gg/typescript-sdk
```

## Usage

### Configuration

Before you can use the SDK, you need to configure it by providing your organization id. You can get your organization ID  on the [WellPlayed console](https://console.well-played.gg/organizations).  

This method will allow you to create your own WellPlayed client, using ApolloGraphQL as a client

```tsx
import { createWellPlayedClient, graphql } from '@wellplayed.gg/typescript-sdk';

const client = createWellPlayedClient({
	token: "authenticationTokenHere",
	organizationId: "organizationIdHere",
  // The SRR mode allows you to defined if you are running on a server or not
	ssr: true,
});

const query = graphql(```
	query Event($id: ID!) {
		event(id: $id) {
			title: true,
			id: true,
		}
	}
```);

client.query({
	query,
	variables: {
		id: "123",
	}
})
```

This client is a Apollo GraphQL client that can be used as is or with the Apollo Provider if you wish to use it with React.

A fully typed client is also available through the following method:
```tsx
import { createTypedClient } from '@wellplayed.gg/typescript-sdk';

const client = createTypedClient({
	token: "authenticationTokenHere",
	organizationId: "organizationIdHere",
});

client.query({
	event: {
		__args: {
			id: "123",
		},
		title: true,
		id: true,
	},
});
```

This will allow you to avoid having to rely on browser extensions for autocomplete features (such as GraphQL Extension) and avoid having to write your own GraphQL Queries/Mutations/Subscriptions.

This client will use Fetch by default, but you can add more options if needed to customize its abilities.

**WE DO NOT RECOMMEND USING THIS CLIENT OVER APOLLO GRAPHQL, WHICH IS MORE RELIABLE**

You can also use the best of two worlds, by creating your query using the Typed client, and using Apollo GraphQL to execute your query:

```tsx
import { createWellPlayedClient, graphql } from '@wellplayed.gg/typescript-sdk';

const client = createWellPlayedClient({
	token: "authenticationTokenHere",
	organizationId: "organizationIdHere",
	// The SRR mode allows you to defined if you are running on a server or not
	ssr: true,
});

const { query, variables } = generateQueryOp({
	event: {
		__args: {
			id: "123",
		},
		title: true,
		id: true,
	},
});
client.query({ query: graphql(query), variables });
```

`createTypedClient` is recommended if you know what you are doing and is more adapted for server-side scenarios. For client-side, please continue your usage of Apollo client.

## License

WellPlayed Typescript SDK is [MIT licensed](https://github.com/WellPlayedGG/react-sdk/tree/master/LICENSE).

## Stay in touch

- Author - [AlexMog](https://github.com/alexmog)