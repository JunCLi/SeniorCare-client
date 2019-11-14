import gql from 'graphql-tag'

export const LOGIN = gql`
	mutation loginCaregiver {
		login(input: {
			email: "taylorswift@music.com"
			password: "12341234"
			userType: caregiver
		}) {
			message
			token
			user {
				user_id
				email
				first_name
				last_name
				userType
			}
		}
	}
`


export const GET_LOGGED_USER = gql`
	query getLoggedUser {
		getLoggedUser {
			user_id
		}
	}
`

export const LOGOUT = gql`
	mutation logout {
		logout {
			message
		}
	}
`

export const DOING_STUFF_TO_CACHE = gql`
	mutation updateUser {
		updateUser(id: "ca-tay-bYXQsXs0EJY4VZzsmJGM") @client {
			message
		}
	}
`

export const CHECK_STUFF = gql`
	query checkUser {
		checkUser @client {
			stuff
		}
	}
`

export const CHECK_THING = gql`
	query checkStuff {
		checkStuff @client {
			thing
			otherThing
		}
	}
`