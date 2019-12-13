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
	query getJob($id: ID) {
		getJob(jobId: $id) {
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

export const GET_JOB_APPLICANT_NUMBERS = gql`
	query getApplicants($jobId: ID) {
		getApplicants(jobId: $jobId) {
			userId
		}
	}
`

export const GET_JOB_APPLICANTS = gql`
	query getApplicants($jobId: ID) {
		getApplicants(jobId: $jobId) {
			userId
			userDetails {
				email
				firstName
				lastName
				dateCreated
				lastModified
				phoneNumber
				location
				avatar
			}
			caregiverDetails {
				birthdate
				yearsExperience
				description
				gender
				availability
				averageRating
				hourlyRate
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

export const MY_JOB_SUBSCRIPTION = gql`
	subscription myJobAdded($familyId: ID!) {
		myJobAdded(familyId: $familyId) {
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