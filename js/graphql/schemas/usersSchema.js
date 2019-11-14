import gql from 'graphql-tag'

export default usersSchema = gql`
	extend type Query {
		checkUser: User
	}

	extend type User {
		stuff: String
	}

	extend type Mutation {
		updateUser(id: ID!): TestMessage
	}

	extend type TestMessage {
		message: String!
	}
`