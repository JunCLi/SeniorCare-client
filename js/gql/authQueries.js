import gql from 'graphql-tag'

export const LOGIN = gql`
	mutation loginCaregiver {
		login(input: {
			email: "nicknurse@basketball.com"
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