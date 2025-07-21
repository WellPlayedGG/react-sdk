import { WellPlayedProvider } from "@well-played.gg/react-sdk";
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./features/home/home";
import { Tournament } from "./features/tournaments/tournament";
import { TournamentStep } from "./features/tournaments/tournament-step";
import { TournamentSteps } from "./features/tournaments/tournament-steps";
import { TournamentTeams } from "./features/tournaments/tournament-teams";
import { Layout } from "./layout";

const router = createBrowserRouter([
	{
		path: "",
		element: <Layout />,
		children: [
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
		],
	},
]);

const App = () => (
	<WellPlayedProvider
		organizationId="vHFLeYcHvCJS4fmZW4uDrN" // Replace with your organizationId
		wpAppConfig={{
			scope: "offline_access",
			client_id: "9e53e218-d77d-48fd-8bd3-2c4f597b94ef", // Replace with your client_id
			redirect_uri: `${window.location.origin}/login`,
		}}
	>
		<RouterProvider router={router} />
	</WellPlayedProvider>
);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
