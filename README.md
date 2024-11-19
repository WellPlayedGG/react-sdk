# WellPlayed React SDK

This is the official WellPlayed React SDK. It provides a set of components and hooks to help you integrate WellPlayed
into your React application and interact with the WellPlayed API.

## Installation

**WARNING: Not published yet**

```bash
yarn add @well-played.gg/react-sdk
```

## Usage

### Configuration

Before you can use the SDK, you need to configure it with your own App Client ID. You can get an App Client ID on the [WellPlayed console](https://console.well-played.gg/apps).

```tsx
import { WellPlayedProvider } from '@wellplayed.gg/react-sdk';

const App = () => {
  return (
    <WellPlayedProvider
        organizationId="replace-with-yours" // Your Organization ID
        wpAppConfig={{
            scope: "offline_access", // Offline access to allow for refresh tokens
            client_id: "replace-with-yours", // Your App Client ID
            redirect_uri: `${
                window.location.protocol
            }//${window.location.origin}`, // Your redirect URL
        }}
    >
        <RouterProvider router={router} />
    </WellPlayedProvider>
  );
};
```

You can find more usage examples in the [demo](/demo) folder.

### Components

TODO

### Hooks

TODO

## License

WellPlayed React SDK is [MIT licensed](/LICENSE).

## Stay in touch

- Author - [AlexMog](https://github.com/alexmog)