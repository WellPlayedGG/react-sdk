import { useQuery } from "@apollo/client";
import { graphql } from "../../graphql";
import { useWellPlayed } from "../../wp.provider";

const OrganizationQuery = graphql(`
  query organization($id: ID!) {
    organization(id: $id) {
      id
      identityProviders(login: true) {
        name
        id
      }
    }
  }
`);

export const useOrganization = () => {
	const { organizationId } = useWellPlayed();
	const { loading, error, data } = useQuery(OrganizationQuery, {
		variables: { id: organizationId as never },
	});

	return { loading, error, data };
};
