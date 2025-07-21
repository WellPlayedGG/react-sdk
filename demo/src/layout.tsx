import { useMutation } from "@apollo/client";
import { useConnectedPlayer } from "@well-played.gg/react-sdk";
import { graphql } from "@well-played.gg/typescript-sdk";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const UPDATE_ME_PLAYER_PROFILE_MUTATION = graphql(`
			mutation updateMePlayerProfile($profile: UpdateMePlayerInput!) {
		createOrUpdateMyPlayerProfile(input: $profile) {
			id
		}
	}
`);

export const Layout = () => {
	const { loading, data, login, logout, refetch, authenticated } =
		useConnectedPlayer();

	const [createOrUpdateProfile] = useMutation(
		UPDATE_ME_PLAYER_PROFILE_MUTATION,
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (authenticated && !loading && !data?.getMyAccount?.profiles[0]) {
			// This could be called on login, or when the user has no profile,
			// and you want to create one. It might be better to provide a
			// form for the user to fill out their profile.
			createOrUpdateProfile({
				variables: {
					profile: {
						username: "CustomUsername",
						/* INFO Example using an identity field: data?.getMyAccount?.identities?.[0]?.properties?.find(
								(p) => p.property === "displayName",
							)?.value || ""*/
						customFields: [],
						description: "Random description",
					},
				},
			}).then(() => refetch());
		}
	}, [authenticated, loading, data]);

	return (
		<>
			{authenticated ? (
				<>
					{loading && <p>Loading...</p>}
					{!loading && (
						<>
							<p>Logged in as {data?.getMyAccount.profiles[0]?.username}</p>
							<button type="button" onClick={() => logout()}>
								Logout
							</button>
						</>
					)}
				</>
			) : (
				<button type="button" onClick={() => login()}>
					Login
				</button>
			)}
			<Outlet />
		</>
	);
};
