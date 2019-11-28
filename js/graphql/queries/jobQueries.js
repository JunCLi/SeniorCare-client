import gql from 'graphql-tag'

export const GET_JOB_FORM_POSITION = gql`
	query getJobForm {
		getJobForm @client {
			formStarted
			basicInformation {
				position {
					completed
					step
					totalSteps
				}
			}
			serviceDetails {
				position {
					completed
					step
					totalSteps
				}
			}
			seniorDetails {
				position {
					completed
					step
					totalSteps
				}
			}
			houseDetails {
				position {
					completed
					step
					totalSteps
				}
			}
			caregiverPreferences {
				position {
					completed
					step
					totalSteps
				}
			}
		}
	}
`

export const GET_JOB_FORM_BASIC_INFORMATION = gql`
	query getJobForm {
		getJobForm @client {
			basicInformation {
				position {
					completed
					step
					totalSteps
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
		}
	}
`


export const GET_JOB_FORM_SERVICE_DETAILS = gql`
	query getJobForm {
		getJobForm @client {
			serviceDetails {
				position {
					completed
					step
					totalSteps
				}
				services
				householdNeeds
			}
		}
	}
`


export const GET_JOB_FORM = gql`
	query getJobForm {
		getJobForm @client {
			formStarted
			basicInformation {
				position {
					completed
					step
					totalSteps
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
					totalSteps
				}
				services
				householdNeeds
			}
			seniorDetails {
				position {
					completed
					step
					totalSteps
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
					totalSteps
				}
				cigarette
				pets
				cannabis
			}
			caregiverPreferences {
				position {
					completed
					step
					totalSteps
				}
				availability
				gender
				driversLicense
			}
			additionalInformation
		}
	}
`

export const CHANGE_FORM_POSITION = gql`
	mutation changeFormPosition($input: ChangeFormPositionObject) {
		changeFormPosition(input: $input) @client {
			formStarted
			position {
				completed
				step
			}
		}
	}
`