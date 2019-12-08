import gql from 'graphql-tag'

export const GET_ALL_USER_JOBS = gql`
	query getAllUsersJobs {
		getAllUserJobs {
			id
			dateCreated
			basicInformation {
				title
				startDate
				hourlyRate
			}
			seniorDetails {
				id
				name
			}
		}
	}
`

export const GET_JOB_DETAILED = gql`
	query getAllUsersJobs($id: ID) {
		getJob(id: $id) {
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
				householdNeeds
			}
			seniorDetails {
				id
				name
				dateCreated
				lastModified
				gender
				birthdate
				relation
				bio
				medicalConditions
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

export const GET_ALL_USER_JOBS_DETAILED = gql`
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
				dateCreated
				lastModified
				gender
				birthdate
				relation
				bio
				medicalConditions
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