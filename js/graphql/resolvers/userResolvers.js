import { CHECK_STUFF } from '../queries/authQueries'
import { GET_LOGGED_USER } from '../queries/authQueries'

export default {
	Mutation: {
		async updateUser(parent, input, { cache, getCacheKey }) {
			const test1 = cache.readQuery({ query: CHECK_STUFF })

			const test2 = cache.readQuery({ query: GET_LOGGED_USER })

			cache.writeData({
				data: {
					checkUser: {
						stuff: 'I changed stuff',
						__typename: 'User'
					},
					getLoggedUser: {
						user_id: "IEvenChangedTheID",
						__typename: 'User'
					}
				}
			})

			return { message: 'trying to do stuff to local stuff', __typename: 'User' }
		},
	},
	// Query: {
	// 	async checkUser(parent, input, { cache, getCacheKey }) {

	// 	},

	// 	async getLoggedUser(parent, input, {cache, getCacheKey }) {

	// 	},
	// },
}