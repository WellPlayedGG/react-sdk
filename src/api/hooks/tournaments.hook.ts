import { useQuery } from "@apollo/client";
import type { ResultOf, VariablesOf } from "gql.tada";
import { graphql } from "../../graphql";
import { usePaginatedLoadAll } from "./paginated-query.hook";
import { useTournamentTeams } from "./teams.hook";

const TOURNAMENT_STEP_SHAPE_QUERY = graphql(`
    query tournamentStepGeneratedShape($stepId: ID!) {
        tournamentStepGeneratedShape(stepId: $stepId) {
            id
            name
            rounds {
                id
                name
                order
                games {
                    id
                    order
                    matches {
                        id
                        order
                        status
                    }
                }
            }
        }
    }
`);

const TOURNAMENT_STEP_SCOERS_QUERY = graphql(`
    query tournamentStepGroupRoundGameMatchScoresGetForStep($stepId: ID!, $page: PageInfo!) {
        tournamentStepGroupRoundGameMatchScoresGetForStep(
            stepId: $stepId
            page: $page
        ) {
            pageInfo {
                endCursor
                hasNextPage
            }
            nodes {
                teamId
                status
                score
                matchId
            }
        }
    }
`);

export const useTournamentStep = ({
	tournamentId,
	stepId,
	skip,
}: { stepId: string; skip?: boolean; tournamentId: string }) => {
	const { loading: loadingStepShape, data: stepShape } = useQuery(
		TOURNAMENT_STEP_SHAPE_QUERY,
		{
			variables: {
				stepId,
			},
			skip,
		},
	);
	const { loading: loadingScores, results: scores } = usePaginatedLoadAll<
		ResultOf<
			typeof TOURNAMENT_STEP_SCOERS_QUERY
		>["tournamentStepGroupRoundGameMatchScoresGetForStep"]["nodes"][0],
		ResultOf<typeof TOURNAMENT_STEP_SCOERS_QUERY>,
		VariablesOf<typeof TOURNAMENT_STEP_SCOERS_QUERY>
	>(TOURNAMENT_STEP_SCOERS_QUERY, {
		skip,
		variables: {
			stepId,
		},
	});
	const { loading: teamsLoading, results: teams } = useTournamentTeams({
		tournamentId,
		skip,
		status: "CONFIRMED",
	});

	return {
		loading: loadingStepShape || loadingScores || teamsLoading,
		groups: stepShape?.tournamentStepGeneratedShape.map((group) => {
			const teamsRecord: Record<
				string,
				ReturnType<typeof useTournamentTeams>["results"][0]
			> = teams.reduce(
				(acc, team) => {
					acc[team.id] = team;
					return acc;
				},
				{} as Record<
					string,
					ReturnType<typeof useTournamentTeams>["results"][0]
				>,
			);
			const matchTeamScores: Record<
				string,
				(ReturnType<typeof useTournamentTeams>["results"][0] & {
					score: number;
				})[]
			> = {};
			for (const score of scores) {
				const team = teamsRecord[score.teamId];
				if (!team) return;
				const matchTeamScore = matchTeamScores[score.matchId] ?? [];
				matchTeamScores[score.matchId] = matchTeamScore.concat({
					...team,
					score: score.score,
				});
			}

			type MatchWithTeams =
				(typeof group.rounds)[0]["games"][0]["matches"][0] & {
					teamScores: ReturnType<typeof useTournamentTeams>["results"][0][];
				};
			for (const round of group.rounds) {
				for (const game of round.games) {
					for (const match of game.matches) {
						const team = matchTeamScores[match.id];
						if (!team) return;
						(match as MatchWithTeams).teamScores = team;
					}
				}
			}

			return group as ReturnType<typeof useTournamentTeams>["results"][0] & {
				rounds: ((typeof group.rounds)[0] & {
					games: ((typeof group.rounds)[0]["games"][0] & {
						matches: MatchWithTeams[];
					})[];
				})[];
			};
		}),
	};
};