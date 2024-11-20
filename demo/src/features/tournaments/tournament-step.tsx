import { useTournamentStep } from "@well-played.gg/react-sdk";
import { useParams } from "react-router-dom";

export const TournamentStep = () => {
	const { tournamentId, stepId } = useParams<{
		tournamentId: string;
		stepId: string;
	}>();
	const { loading, groups } = useTournamentStep({
		tournamentId: tournamentId ?? "",
		stepId: stepId ?? "",
	});

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Tournament Step</h1>
			{groups?.map((group) => (
				<div key={group.id}>
					{group.name}
					<div style={{ display: "flex" }}>
						{group.rounds.map((round) => (
							<div
								key={round.id}
								style={{ flex: 1, border: "1px solid black" }}
							>
								Round #{round.id} - {round.name}
								{round.games.map((game) => (
									<div key={game.id}>
										Game #{game.id}
										{game.matches.map((match) => (
											<div key={match.id}>
												Match #{match.id}
												{match.teamScores.map((team) => (
													<div key={team.id}>
														{team.name} - {team.score}
													</div>
												))}
											</div>
										))}
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};
