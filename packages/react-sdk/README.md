# WellPlayed React SDK

This is the official [WellPlayed](https://well-played.gg) React SDK. It provides a set of components and hooks to help you integrate WellPlayed
into your React application and interact with the WellPlayed API.

## Installation

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
            }//${window.location.origin}/login`, // The /login is required here (any path will work, but it needs a path or you'll get an error)
        }}
    >
        <RouterProvider router={router} />
    </WellPlayedProvider>
  );
};
```

You can find more usage examples in the [demo](https://github.com/WellPlayedGG/react-sdk/tree/master/demo) folder.

### Components

* RichTextEditorContent: A component to show up, securely, HTML-based user content (tournament description, event description, ...)

### Hooks

* usePlayers: Retrieve player profiles from a list of playersIds
* useConnectedPlayer: Retrieve current connected player profile, permissions, and identities
* useTournamentTeams: Retrieve the list of teams for a specific tournament, depending on their status
* useTournamentStep: Retrieve all the data needed to reconstruct a tournament step

## License

WellPlayed React SDK is [MIT licensed](https://github.com/WellPlayedGG/react-sdk/tree/master/LICENSE).

## Stay in touch

- Author - [AlexMog](https://github.com/alexmog)