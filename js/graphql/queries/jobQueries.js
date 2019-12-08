import gql from 'graphql-tag'

export const GET_ALL_USER_JOBS = gql`
	query getAllUsersJobs {
		getAllUserJobs {
			id
			familyId
			dateCreated
			basicInformation {
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
				services
			}
			seniorDetails {
				id
				name
				date_created
				last_modified
				gender
				birthdate
				relation
				bio
				medical_conditions
				language
				picture
			}
			houseDetails {
				cigarette
				pets
				cannabis
			}
			caregiverPreferences {
				availability
				genderPref
				driversLicense
			}
		}
	}
`