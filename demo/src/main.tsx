import { WellPlayedProvider } from "@well-played.gg/react-sdk";
import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./features/home/home";
import { Tournament } from "./features/tournaments/tournament";
import { TournamentStep } from "./features/tournaments/tournament-step";
import { TournamentSteps } from "./features/tournaments/tournament-steps";
import { TournamentTeams } from "./features/tournaments/tournament-teams";

const router = createBrowserRouter([
	{
		path: "",
		element: <Home />,
	},
	{
		path: "tournaments/:id",
		element: <Tournament />,
	},
	{
		path: "tournaments/:id/teams",
		element: <TournamentTeams />,
	},
	{
		path: "tournaments/:id/steps",
		element: <TournamentSteps />,
	},
	{
		path: "tournaments/:tournamentId/steps/:stepId",
		element: <TournamentStep />,
	},
]);

const App = () => (
	<WellPlayedProvider
		organizationId="vHFLeYcHvCJS4fmZW4uDrN" // Replace with your organizationId
		wpAppConfig={{
			scope: "offline_access",
			client_id: "02b0313b-5dbc-4285-8240-afe192b83b4f", // Replace with your client_id
			redirect_uri: `${window.location.protocol}//${window.location.origin}`,
		}}
	>
		<RouterProvider router={router} />
	</WellPlayedProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
