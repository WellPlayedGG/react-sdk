# WellPlayed Typescript SDK

This is the official [WellPlayed](https://well-played.gg) Typescript SDK. It provides a set of tools to interract with WellPlayed's API.

## Installation

```bash
yarn add @well-played.gg/typescript-sdk
```

## Usage

### Configuration

Before you can use the SDK, you need to configure it by providing your organization id. You can get your organization ID  on the [WellPlayed console](https://console.well-played.gg/organizations).

```tsx
import { createWellPlayedClient } from '@wellplayed.gg/typescript-sdk';

const client = createWellPlayedClient({
	token: "authenticationTokenHere",
	organizationId: "organizationIdHere",
  // The SRR mode allows you to defined if you are running on a server or not
	ssr: true,
});
```

This client is a Apollo GraphQL client that can be used as is or with the Apollo Provider if you wish to use it with React.

## License

WellPlayed Typescript SDK is [MIT licensed](https://github.com/WellPlayedGG/react-sdk/tree/master/LICENSE).

## Stay in touch

- Author - [AlexMog](https://github.com/alexmog)