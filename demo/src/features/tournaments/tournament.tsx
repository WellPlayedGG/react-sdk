import { useQuery } from "@apollo/client";
import { RichTextEditorContent, graphql } from "@well-played.gg/react-sdk";
import { Link, useParams } from "react-router-dom";
import { formatDate } from "../../utils/date.utils";

const TOURNAMENT_QUERY = graphql(`
    query tournament($id: ID!) {
        tournament(id: $id) {
            id
            title
            endRegistrationsAt
            startRegistrationsAt
            startAt
            endAt
            description
        }
    }
`);

export const Tournament = () => {
	const { id } = useParams<{ id: string }>();
	const { loading, error, data } = useQuery(TOURNAMENT_QUERY, {
		variables: { id: id ?? "" },
	});

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data && (
				<>
					<h1>{data.tournament.title}</h1>
					<Link to={`/tournaments/${data.tournament.id}/teams`}>Teams</Link>
					<br />
					<Link to={`/tournaments/${data.tournament.id}/steps`}>Steps</Link>
					<RichTextEditorContent content={data.tournament.description} />
					<p>
						Registrations:
						{data.tournament.startRegistrationsAt &&
							formatDate(data.tournament.startRegistrationsAt)}{" "}
						-{" "}
						{data.tournament.endRegistrationsAt &&
							formatDate(data.tournament.endRegistrationsAt)}
					</p>
					<p>
						Tournament dates:
						{data.tournament.startAt && formatDate(data.tournament.startAt)} -{" "}
						{data.tournament.endAt && formatDate(data.tournament.endAt)}
					</p>
				</>
			)}
		</div>
	);
};
