import userResolvers from './userResolvers'
import caregiverResolvers from './caregiverResolvers'
import jobResovlers from './jobResolvers'

export default {
	Mutation: {
		...userResolvers.Mutation,
		...caregiverResolvers.Mutation,
		...jobResovlers.Mutation,
	},
	Query: {
		...userResolvers.Query,
		...caregiverResolvers.Query,
		...jobResovlers.Query,
	},
}