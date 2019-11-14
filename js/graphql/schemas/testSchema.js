import gql from 'graphql-tag'

export default testSchema = gql`
	extend type Query {
		checkStuff: Stuff
	}

	extend type Stuff {
		thing: String
		otherThing: String
	}
`