import { useQuery } from "@apollo/client";
import type { ResultOf, VariablesOf } from "gql.tada";
import { cloneDeep } from "lodash";
import { graphql } from "../../graphql";
import { usePaginatedLoadAll } from "./paginated-query.hook";
import { useTournamentTeams } from "./tournament-teams.hook";

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

type BaseMatch = ResultOf<
	typeof TOURNAMENT_STEP_SHAPE_QUERY
>["tournamentStepGeneratedShape"][0]["rounds"][0]["games"][0]["matches"][0];

type TeamScore = ReturnType<typeof useTournamentTeams>["results"][0] & {
	score: number;
};

type MatchWithTeams = BaseMatch & {
	teamScores: TeamScore[];
};

type BaseGame = ResultOf<
	typeof TOURNAMENT_STEP_SHAPE_QUERY
>["tournamentStepGeneratedShape"][0]["rounds"][0]["games"][0];

type GameWithMatches = Omit<BaseGame, "matches"> & {
	matches: MatchWithTeams[];
};

type BaseRound = ResultOf<
	typeof TOURNAMENT_STEP_SHAPE_QUERY
>["tournamentStepGeneratedShape"][0]["rounds"][0];

type RoundWithGames = Omit<BaseRound, "games"> & {
	games: GameWithMatches[];
};

type BaseGroup = ResultOf<
	typeof TOURNAMENT_STEP_SHAPE_QUERY
>["tournamentStepGeneratedShape"][0];

type Group = Omit<BaseGroup, "rounds"> & {
	rounds: RoundWithGames[];
};

export const useTournamentStep = ({
	tournamentId,
	stepId,
	skip,
}: { stepId: string; skip?: boolean; tournamentId: string }): {
	loading: boolean;
	groups: Group[] | undefined;
} => {
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
		groups: stepShape?.tournamentStepGeneratedShape.map((groupDto) => {
			const group = cloneDeep(groupDto);
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
				if (!team) {
					console.warn(
						`No team for score ${score.teamId}, match ${score.matchId}`,
					);
					continue;
				}
				const matchTeamScore = matchTeamScores[score.matchId] ?? [];
				matchTeamScores[score.matchId] = matchTeamScore.concat({
					...team,
					score: score.score,
				});
			}

			for (const round of group.rounds) {
				for (const game of round.games) {
					for (const match of game.matches) {
						(match as MatchWithTeams).teamScores =
							matchTeamScores[match.id] ?? [];
					}
				}
			}

			return group as Group;
		}),
	};
};
