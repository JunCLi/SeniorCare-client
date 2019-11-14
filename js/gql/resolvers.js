export default {
	Mutation: {
		async updateUser(parent, input, { cache, getCacheKey }) {
			console.log('parent: ', parent)
			console.log('input: ', input)
			console.log('cache: ', cache)

			const id = getCacheKey({ id: input.id, __typename: 'dostuff'})

			console.log('cachekeyid: ', id)

			const data = {id: input.id, stuff: 'what is stuff?'}
			cache.writeData({id, data})

			return {
				message: 'trying to do stuff to local stuff',
				__typename: 'dostuff'
			}
		},
	},
	Query: {
		async checkUser(parent, input, { cache, getCacheKey }) {
			console.log('parent: ', parent, 'input: ', input ) 

			console.log(cache.readQuery())
		}
	},
}