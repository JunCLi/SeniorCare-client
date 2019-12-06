import gql from 'graphql-tag'

export const GET_ALL_SENIORS = gql`
	query getAllSeniors {
		getAllSeniors {
			id
			name
			birthdate
			gender
			relation
			language
			medical_conditions
			bio
			picture
		}
	}
`