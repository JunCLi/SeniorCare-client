import gql from 'graphql-tag'

export const FIND_ALL_CAREGIVERS = gql`
	query getAllCaregivers($input: FilterCaregivers) {
		getAllCaregivers(input: $input) {
			userId
			userDetails {
				email
				firstName
				lastName
				dateCreated
				lastModified
				avatar
				phoneNumber
				location
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

export const SAVE_CAREGIVER_FILTER = gql`
	mutation saveCaregiverFilter($input: FilterCaregivers) {
		saveCaregiverFilter(input: $input) @client {
			gender
			availability
			hourlyRate
			yearsExperience
		}
	}
`

export const GET_CAREGIVER_FILTER = gql`
	query getCaregiverFilter {
		getCaregiverFilter @client {
			gender
			availability
			hourlyRate
			yearsExperience
		}
	}
`