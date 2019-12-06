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

export const GET_JOB_FORM_SENIOR_DETAILS = gql`
	query getJobForm {
		getJobForm @client {
			seniorDetails {
				position {
					completed
					step
					totalSteps
				}
				id
				name
				gender
				birthdate
				relation
				bio
				medicalConditions
				language
				picture
			}
		}
	}
`

export const GET_JOB_FORM_HOUSE_DETAILS = gql`
	query getJobForm {
		getJobForm @client {
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
		}
	}
`

export const GET_JOB_FORM_CAREGIVER_PREFERENCE = gql`
	query getJobForm {
		getJobForm @client {
			caregiverPreferences {
				position {
					completed
					step
					totalSteps
				}
				availability
				genderPref
				driversLicense
			}
		}
	}
`

export const GET_JOB_FORM_TITLE = gql`
	query getJobForm {
		getJobForm @client {
			basicInformation {
				title
			}
		}
	}
`


export const GET_JOB_FORM = gql`
	query getJobForm {
		getJobForm @client {
			formStarted
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

export const SELECT_SENIOR_JOB_FORM = gql`
	mutation addSeniorToForm($input: seniorDetailsInput) {
		addSeniorToForm(input: $input) @client {
			message
		}
	}
`

export const SUBMIT_JOB_POST = gql`
	mutation submitJobPost($input: JobFormInput) {
		submitJobPost(input: $input) {
			message
		}
	}
`