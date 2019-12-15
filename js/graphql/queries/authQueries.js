import gql from 'graphql-tag'

export const SIGNUP = gql`
	mutation signup($input: SignupObject!) {
		signup(input: $input) {
			message
		}
	}
`

export const LOGIN = gql`
	mutation loginCaregiver($input: LoginObject!) {
		login(input: $input) {
			message
			token
			user {
				userId
				email
				firstName
				lastName
				userType
			}
		}
	}
`

export const CHECK_AUTHENTICATION = gql`
	query getLoggedUser {
		getLoggedUser {
			userId
			firstName
			lastName
			avatar
			userType
		}
	}
`


export const GET_LOGGED_USER = gql`
	query getLoggedUser {
		getLoggedUser {
			userId
		}
	}
`

export const GET_LOGGED_USER_BASIC_WITH_AVATAR = gql`
	query getLoggedUser {
		getLoggedUser {
			userId
			firstName
			lastName
			avatar
		}
	}
`

export const GET_PROFILE = gql`
	query getLoggedUser {
		getLoggedUser {
			userId
			email
			firstName
			lastName
			dateCreated
			lastModified
			avatar
			phoneNumber
			location
			userType
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

export const GET_LOGGED_USER_CACHE = gql`
	query getLoggedUser @client {
		getLoggedUser @client {
			userId
		}
	}
`

export const GET_USER = gql`
	query getUser($userId: ID!) {
		getUser(userId: $userId) {
			userId
			firstName
			lastName
			avatar
		}
	}
`

// export const DOING_STUFF_TO_CACHE = gql`
// 	mutation updateUser {
// 		updateUser(id: "ca-tay-bYXQsXs0EJY4VZzsmJGM") @client {
// 			message
// 		}
// 	}
// `

// export const CHECK_STUFF = gql`
// 	query checkUser {
// 		checkUser @client {
// 			stuff
// 		}
// 	}
// `

// export const CHECK_THING = gql`
// 	query checkStuff {
// 		checkStuff @client {
// 			thing
// 			otherThing
// 		}
// 	}
// `