import { graphql } from "@well-played.gg/typescript-sdk";

export const GUEST_ENTER = graphql(`
	mutation guestEnter($input: GuestEnterInput!) {
		guestEnter(input: $input) {
			token
			playerId
			origin
			expiresAt
			link {
				id
				purpose
				data
				expiresAt
			}
		}
	}
`);

export const GUEST_LINK_EXCHANGE = graphql(`
	mutation guestLinkExchange($token: String!) {
		guestLinkExchange(token: $token) {
			token
			playerId
			origin
			expiresAt
			link {
				id
				purpose
				data
				expiresAt
			}
		}
	}
`);

export const GUEST_LINK_RESOLVE = graphql(`
	query guestLinkResolve($token: String!) {
		guestLinkResolve(token: $token) {
			status
			purpose
			expiresAt
			firstName
			data
		}
	}
`);

export const GUEST_ME = graphql(`
	query guestMe {
		guestMe {
			sessionPlayerId
			origin
			expiresAt
			link {
				id
				purpose
				data
				expiresAt
			}
		}
	}
`);

export const GUEST_SESSION_END = graphql(`
	mutation guestSessionEnd {
		guestSessionEnd
	}
`);
