import { useWellPlayed } from "@well-played.gg/react-sdk";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date.utils";

// This file contains an example on how to use the typed client with the useEffect

export const Home = () => {
	const { typedClient } = useWellPlayed();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [data, setData] = useState<{
		tournaments: {
			nodes: {
				id: string;
				title: string;
				startAt: string;
				endAt: string;
			}[];
		};
	}>();

	useEffect(() => {
		typedClient
			.query({
				tournaments: {
					__args: {
						page: {
							first: 10,
						},
						query: {
							status: "REGISTRATIONS_OPEN",
							orderBy: "REGISTRATIONS_END_AT",
							orderDirection: "ASC",
						},
					},
					nodes: {
						id: true,
						title: true,
						startAt: true,
						endAt: true,
					},
				},
			})
			.then((data) => {
				// This data is typed, so the usage is more adapted for server-side tasks, prefer using Apollo Client for client-side
				// We do not recommend using typedClient for client-side tasks, prefer using Apollo Client for client-side, we also highly recommand using the typed queries generated using gql.tada
				setData(data);
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [typedClient]);

	return (
		<div>
			<h1>Tournaments</h1>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data && (
				<ul>
					{data.tournaments.nodes.map((tournament) => (
						<li key={tournament.id}>
							<Link
								to={{
									pathname: `/tournaments/${tournament.id}`,
								}}
							>
								<h2>{tournament.title}</h2>
							</Link>
							<p>
								{tournament.startAt && formatDate(tournament.startAt)} -{" "}
								{tournament.endAt && formatDate(tournament.endAt)}
							</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
