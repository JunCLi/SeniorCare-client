import { GET_JOB_FORM, GET_JOB_FORM_POSITION, GET_JOB_FORM_SENIOR_DETAILS } from '../queries/jobQueries'

// import gql from 

export default {
	Mutation: {
		async changeFormPosition(parent, { input }, { cache }) {
			try {
				const { section, direction, payload } = input
				const formPositionData = cache.readQuery({ query: GET_JOB_FORM_POSITION })

				const currentSection = formPositionData.getJobForm[section]

				if (direction === 'next') {
					if (currentSection.position.step === currentSection.position.totalSteps) {
						currentSection.position.completed = true
						currentSection.position.step = 1
					} else {
						currentSection.position.step++
					}
				} else if (direction === 'back') {
					if (currentSection.position.step !== 1) {
						currentSection.position.step--
					}
				}

				const newPositionData = {
					data: {
						getJobForm: {
							...formPositionData.getJobForm,
							formStarted: true,
							[section]: {
								...currentSection,
								...payload,
							}
						}
					}
				}

				if (!formPositionData.getJobForm.formStarted) {
					newPositionData.data.getJobForm.formStarted = true
				}

				console.log('newPositionData', newPositionData)

				cache.writeData(newPositionData)

			} catch(err) {
				throw err
			}
		},

		async addSeniorToForm(parent, { input }, { cache }) {
			try {
				const seniorDetailsData = cache.readQuery({ query: GET_JOB_FORM_SENIOR_DETAILS })

				const seniorData = {
					data: {
						getJobForm: {
							...seniorDetailsData.getJobForm,
							seniorDetails: {
								position: {
									...seniorDetailsData.getJobForm.seniorDetails.position,
									completed: true,
								},
								...input,
							}
						}
					}
				}
				cache.writeData(seniorData)
			} catch(err) {
				throw err
			}
		},
	},
	Query: {
		// async getJobForm(parent, input, { cache }) {
			// const readData = cache.readQuery({
			// 	query:
			// })
			// console.log('test')
		// }
	},
}