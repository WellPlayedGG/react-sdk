import { useQuery } from "@apollo/client";
import { graphql } from "@well-played.gg/react-sdk";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date.utils";

const LIST_TOURNAMENTS_QUERY = graphql(`
    query tournaments {
        tournaments(query: {
            status: REGISTRATIONS_OPEN,
            orderBy: REGISTRATIONS_END_AT,
            orderDirection: ASC,
        }, page: {first: 10}) {
            nodes {
                id
                title
                startAt
                endAt
            }
        }
    }
`);

export const Home = () => {
	const { loading, error, data } = useQuery(LIST_TOURNAMENTS_QUERY);

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
