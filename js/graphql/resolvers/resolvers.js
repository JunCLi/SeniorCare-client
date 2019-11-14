import userResolvers from './userResolvers'

export default {
	Mutation: {
		...userResolvers.Mutation,
	},
	Query: {
		...userResolvers.Query,
	},
}