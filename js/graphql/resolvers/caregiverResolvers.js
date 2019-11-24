import { GET_CAREGIVER_FILTER } from '../queries/caregiverQueries'

export default {
	Mutation: {
		async saveCaregiverFilter(parent, { input }, { cache }) {
			const readData = cache.readQuery({ query: GET_CAREGIVER_FILTER })

			const currentFilter = readData.getCaregiverFilter

			console.log('what is input?', input)
			console.log('current Filter: ', currentFilter, '\n')

			console.log('test', {
				...currentFilter,
				...input,
			})

			cache.writeData({
				data: {
					getCaregiverFilter: {
						...currentFilter,
						...input,
					}
				}
			})
		},
	},
	Query: {

	},
}