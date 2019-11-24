import gql from 'graphql-tag'

export const FIND_ALL_CAREGIVERS = gql`
	query getAllCaregivers($input: FilterCaregivers) {
		getAllCaregivers(input: $input) {
			user_id
			userDetails {
				email
				first_name
				last_name
				date_created
				last_modified
				avatar
				phone_number
				location
			}
			caregiverDetails {
				birthdate
				years_experience
				description
				gender
				availability
				average_rating
				hourly_rate
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