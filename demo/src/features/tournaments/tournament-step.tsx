import { useParams } from "react-router-dom";
import { useTournamentStep } from "../../../../src";

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

	// TODO Show all groups as trees
	return <></>;
};
