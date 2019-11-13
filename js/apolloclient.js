import ApolloClient from 'apollo-boost'

const apolloclient = new ApolloClient({
	uri: 'http://localhost:8080/graphql',
})

export default apolloclient