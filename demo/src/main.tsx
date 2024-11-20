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
		path: "tournament/:id/steps",
		element: <TournamentSteps />,
	},
	{
		path: "tournament/:tournamentId/steps/:stepId",
		element: <TournamentStep />,
	},
]);

const App = () => (
	<WellPlayedProvider
		organizationId={"replace-with-yours"}
		wpAppConfig={{
			scope: "offline_access",
			client_id: "replace-with-yours",
			redirect_uri: `${
				window.location.protocol
			}//${window.location.origin}/redirect`,
		}}
	>
		<RouterProvider router={router} />
	</WellPlayedProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
