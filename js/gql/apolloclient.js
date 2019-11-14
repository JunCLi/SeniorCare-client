import { ApolloClient } from 'apollo-client'
import { ApolloLink, split } from 'apollo-link'
import { withClientState } from 'apollo-link-state'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { getMainDefinition } from 'apollo-utilities'
import { WebSocketLink } from 'apollo-link-ws'
// import { createUploadLink } from 'apollo-upload-client'
// import { BatchHttpLink } from 'apollo-link-batch-http'

import resolvers from './resolvers'
import typeDefs from './localSchema'

const wsLink = new WebSocketLink({
  uri: `ws://localhost:8080/graphql`,
  options: {
    reconnect: true
  }
});

const cache = new InMemoryCache()

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
})

const defaults = {
	getLoggedUser: {
		stuff: "Still don't know",
		__typename: 'User'
	},
	checkUser: {
		stuff: "Testing testing I'm just suggesting",
		__typename: 'User'
	}
}

const stateLink = withClientState({
	cache: cache,
	defaults,
})

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
  credentials: 'include'
})

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink,
  httpLink
)

// cache.writeData({
// 	data: {
// 		checkUser: {
// 			stuff: "Still don't know",
// 			__typename: 'User'
			
// 		},
// 		notSureStuff: "yeah I really do not know",
// 	}
// })

const apolloclient = new ApolloClient({
  link: ApolloLink.from([errorLink, stateLink, link]),
	cache: cache,
	resolvers,
	typeDefs,
})

export default apolloclient