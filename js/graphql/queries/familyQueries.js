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
			medicalConditions
			bio
			picture
		}
	}
`