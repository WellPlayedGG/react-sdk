import type { ResultOf, VariablesOf } from "@well-played.gg/typescript-sdk";
import { graphql } from "@well-played.gg/typescript-sdk";
import { useState } from "react";
import { usePaginatedLoadAll } from "./paginated-query.hook";
import { usePlayers } from "./players.hook";

const TOURNAMENT_TEAM_QUERY = graphql(`
  query tournamentTeam(
    $tournamentId: ID!
    $page: PageInfo!
    $status: TournamentTeamStatus
  ) {
    tournamentTeams(
      tournamentId: $tournamentId
      page: $page
      memberStatus: ACCEPTED
      status: $status
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        name
        status
        members {
          status
          playerProfileId
        }
      }
    }
  }
`);

/**
 * Fetches all teams for a tournament
 * @param tournamentId The ID of the tournament
 * @param skip Whether to skip fetching the data or not
 * @param status The status of the teams to fetch
 */
export const useTournamentTeams = ({
	tournamentId,
	skip,
	status,
}: {
	tournamentId: string;
	skip?: boolean;
	status?: VariablesOf<typeof TOURNAMENT_TEAM_QUERY>[`status`];
}): {
	results: (Omit<
		ResultOf<typeof TOURNAMENT_TEAM_QUERY>["tournamentTeams"]["nodes"][0],
		"members"
	> & {
		members: (ResultOf<
			typeof TOURNAMENT_TEAM_QUERY
		>["tournamentTeams"]["nodes"][0]["members"][0] & {
			player: ReturnType<typeof usePlayers>["results"][0];
		})[];
	})[];
	loading: boolean;
} => {
	const [playerIds, setPlayerIds] = useState<string[]>([]);

	const { loading, results } = usePaginatedLoadAll<
		ResultOf<typeof TOURNAMENT_TEAM_QUERY>["tournamentTeams"]["nodes"][0],
		ResultOf<typeof TOURNAMENT_TEAM_QUERY>,
		VariablesOf<typeof TOURNAMENT_TEAM_QUERY>
	>(TOURNAMENT_TEAM_QUERY, {
		variables: {
			tournamentId,
			status,
		},
		onResults: async (data) => {
			setPlayerIds(
				data
					.flatMap((team) => team.members)
					.map((member) => member.playerProfileId),
			);
		},
		skip,
	});

	const { loading: playersLoading, results: players } = usePlayers({
		playerIds,
		skip: loading,
	});

	return {
		loading: loading || playersLoading,
		results:
			(players.length > 0 &&
				results.map((team) => ({
					...team,
					members: team.members.map((member) => ({
						...member,
						// biome-ignore lint/style/noNonNullAssertion: <explanation>
						player: players.find(
							(player) => player.id === member.playerProfileId,
						)!,
					})),
				}))) ||
			[],
	};
};
