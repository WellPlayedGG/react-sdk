import { useQuery } from "@apollo/client";
import { graphql } from "@well-played.gg/react-sdk";
import { Link, useParams } from "react-router-dom";

const TOURNAMENT_STEPS_QUERY = graphql(`
	query tournamentSteps($tournamentId: ID!) {
		tournamentSteps(tournamentId: $tournamentId) {
			id
			description
			status
		}
	}
`);

export const TournamentSteps = () => {
	const { id } = useParams<{ id: string }>();
	const { loading, data } = useQuery(TOURNAMENT_STEPS_QUERY, {
		variables: { tournamentId: id ?? "" },
	});

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Tournament Steps</h1>
			{data?.tournamentSteps.map((step) => (
				<Link key={step.id} to={`/tournaments/${id}/steps/${step.id}`}>
					<h2>{step.description}</h2>
					<p>{step.status}</p>
				</Link>
			))}
		</div>
	);
};
