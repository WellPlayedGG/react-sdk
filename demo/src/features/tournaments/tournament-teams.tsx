import { useParams } from "react-router-dom";
import { useTournamentTeams } from "../../../../src";

export const TournamentTeams = () => {
	const { id } = useParams<{ id: string }>();
	const { loading, results: teams } = useTournamentTeams({
		tournamentId: id ?? "",
	});

	if (loading) {
		return <div>Loading...</div>;
	}
	const confirmedTeams = teams?.filter((team) => team.status === "CONFIRMED");
	const registeredTeams = teams?.filter(
		(team) =>
			team.status === "REGISTERED" ||
			team.status === "AWAITING_FOR_PRESENCE_CONFIRMATION",
	);
	return (
		<div>
			<h1>Confirmed teams</h1>
			{confirmedTeams?.map((team) => (
				<div key={team.id}>
					{team.name}
					<br />
					{team.members.map(
						(member) => `${member.player?.username} - ${member.status}`,
					)}
				</div>
			))}
			<h1>Registered teams</h1>
			{registeredTeams?.map((team) => (
				<div key={team.id}>
					{team.name}
					<br />
					{team.members.map(
						(member) => `${member.player?.username} - ${member.status}`,
					)}
				</div>
			))}
		</div>
	);
};
