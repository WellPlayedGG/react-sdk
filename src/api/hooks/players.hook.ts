import { useLazyQuery } from "@apollo/client";
import type { ResultOf } from "gql.tada";
import { useEffect, useState } from "react";
import { graphql } from "../../graphql";
import { useOrganization } from "./organization.hook";

const GET_PLAYERS_QUERY = graphql(`
  query players(
    $ids: [ID!]!
    $page: PageInfo!
  ) {
    players(
      ids: $ids
      page: $page
    ) {
      nodes {
        id
        username
        ownerId
		  customFields {
			  property
			  value
		  }
        identities {
          properties {
            property
            value
          }
        }
      }
    }
  }
`);

export const usePlayers = ({
	playerIds,
	skip,
}: {
	playerIds?: string[];
	skip?: boolean;
}) => {
	const { loading: organizationLoading, data: organization } =
		useOrganization();
	const [players, setPlayers] = useState<
		ResultOf<typeof GET_PLAYERS_QUERY>["players"]["nodes"][0][]
	>([]);
	const [loading, setLoading] = useState(!skip);

	const [fetch] = useLazyQuery(GET_PLAYERS_QUERY);

	const refetch = async (playerIds: string[]) => {
		const result: ResultOf<typeof GET_PLAYERS_QUERY>["players"]["nodes"][0][] =
			[];
		while (playerIds.length > 0) {
			result.push(
				...((
					await fetch({
						variables: {
							page: { first: 100 },
							ids: playerIds.splice(0, 100),
						},
					})
				).data?.players?.nodes ?? []),
			);
		}
		setPlayers(result);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!skip && playerIds && organization) {
			setLoading(true);
			refetch(playerIds).finally(() => setLoading(false));
		}
	}, [skip, playerIds, organization]);

	return {
		results: players,
		refetch,
		loading: loading || organizationLoading,
	};
};
