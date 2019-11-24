import userResolvers from './userResolvers'
import caregiverResolvers from './caregiverResolvers'

export default {
	Mutation: {
		...userResolvers.Mutation,
		...caregiverResolvers.Mutation,
	},
	Query: {
		...userResolvers.Query,
		...caregiverResolvers.Query,
	},
}