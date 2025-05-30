import { useLazyQuery, useQuery } from "@apollo/client";
import { useOidc } from "@axa-fr/react-oidc";
import {
	type ResultOf,
	graphql,
} from "@well-played.gg/typescript-sdk";
import { useEffect, useState } from "react";

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
		  providerId
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
		if (!skip && playerIds) {
			setLoading(true);
			refetch(playerIds).finally(() => setLoading(false));
		}
	}, [skip, playerIds]);

	return {
		results: players,
		refetch,
		loading,
	};
};

const GET_MY_PLAYER_QUERY = graphql(`
	query getMyAccount {
		getMyAccount {
			id
			permissions {
				id
				resources
			}
			profiles {
				id
				username
				customFields {
					property
					value
				}
			}
			identities {
				providerId
				properties {
					property
					value
				}
			}
		}
	}
`);

export const useConnectedPlayer = () => {
	const oidc = useOidc();
	const { data, loading, refetch } = useQuery(GET_MY_PLAYER_QUERY, {
		skip: !oidc.isAuthenticated,
		notifyOnNetworkStatusChange: true,
	});

	return {
		loading,
		data,
		refetch,
		authenticated: oidc.isAuthenticated,
		login: oidc.login,
		logout: oidc.logout,
	};
};
