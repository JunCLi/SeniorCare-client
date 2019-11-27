import { GET_JOB_FORM, GET_JOB_FORM_POSITION } from '../queries/jobQueries'

// import gql from 

export default {
	Mutation: {
		async changeFormPosition(parent, { input }, { cache }) {
			try {
				const { section, direction } = input
				const formPositionData = cache.readQuery({ query: GET_JOB_FORM_POSITION })

				const currentSection = formPositionData.getJobForm[section].position

				if (direction === 'next') {
					if (currentSection.step === currentSection.totalSteps) {
						currentSection.completed = true
						currentSection.step = 1
					} else {
						currentSection.step++
					}
				} else if (direction === 'back') {
					if (currentSection.step !== 1) {
						currentSection.step--
					}
				}

				const newPositionData = {
					data: {
						...formPositionData,
					}
				}

				cache.writeData(newPositionData)

			} catch(err) {
				throw err
			}
		}
	},
	Query: {
		// async getJobForm(parent, input, { cache }) {
		// 	const readData = cache.readQuery({
		// 		query:
		// 	})
		// }
	},
}