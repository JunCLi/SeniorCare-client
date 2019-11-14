import { CHECK_STUFF } from './authQueries'
import { GET_LOGGED_USER } from './authQueries'

export default {
	Mutation: {
		async updateUser(parent, input, { cache, getCacheKey }) {
			const test1 = cache.readQuery({ query: CHECK_STUFF })
			console.log('test1: ', test1)

			const test2 = cache.readQuery({ query: GET_LOGGED_USER })
			console.log('test2: ', test2)

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