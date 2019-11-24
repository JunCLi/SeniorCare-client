import gql from 'graphql-tag'

export const TEST_FIND_ALL_CAREGIVERS = gql`
	query testgetAllCaregivers {
		testgetAllCaregivers {
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

// export const FIND_ALL_CAREGIVERS = gql`
// 	query getAllCaregivers {
// 		getAllCaregivers (input: {
// 			gender: female
// 			# availability: liveout
// 			hourlyRate: 30
// 			# yearsExperience: 5
// 		}) {
// 			user_id
// 			userDetails {
// 				email
// 				first_name
// 				last_name
// 				date_created
// 				last_modified
// 				phone_number
// 				location
// 			}
// 			caregiverDetails {
// 				birthdate
// 				years_experience
// 				description
// 				gender
// 				availability
// 				average_rating
// 				hourly_rate
// 			}
// 		}
// 	}
// `

// export const FILTER_FIND_CAREGIVERS = gql`
// 	mutation filterFindCaregivers {
// 		filterFindCaregivers @client {

// 		}
// 	}
// `