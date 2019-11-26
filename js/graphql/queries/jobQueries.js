import gql from 'graphql-tag'

export const TEST_JOB_FORM = gql`
	query getJobForm {
		getJobForm @client {
			
		}
	}
`

export const GET_JOB_FORM = gql`
	query getJobForm {
		getJobForm @client {
			basicInformation {
				position {
					completed
					step
				}
				title
				startDate
				endDate
				location {
					address
					city
					province
					postalCode
				}
				hourlyRate
			}
			serviceDetails {
				position {
					completed
					step
				}
				services
				householdNeeds
			}
			seniorDetails {
				position {
					completed
					step
				}
				name
				gender
				birthdate
				relation
				bio
				medicalConditions
				language
				picture
			}
			houseDetails {
				position {
					completed
					step
				}
				cigarette
				pets
				cannabis
			}
			caregiverPreferences {
				position {
					completed
					step
				}
				availability
				gender
				driversLicense
				additionalInformation
			}
		}
	}
`