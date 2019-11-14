import ApolloClient from 'apollo-boost'
import { cache } from 'apollo-boost'

import typeDefs from './localSchema'
import resolvers from './resolvers'

const apolloclient = new ApolloClient({
	uri: 'http://localhost:8080/graphql',
	resolvers,
	typeDefs,
})

export default apolloclient