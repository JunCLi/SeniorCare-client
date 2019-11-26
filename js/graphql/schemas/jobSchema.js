import gql from 'graphql-tag'

export default jobSchema = gql`

	enum Services {
		bathing
		dressing
		companionship
		appointments
		grooming
		feeding
		driving
		mobility
	}

	enum HouseholdNeeds {
		errands
		housekeeping
		shoppping
		mealPrep
		laundry
	}

	extend type Query {
		getJobForm: JobForm
	}

	type JobForm {
		basicInformation: BasicInformation
		serviceDetails: ServiceDetails
		seniorDetails: SeniorDetails
		houseDetails: HouseDetails
		caregiverPreferences: CaregiverPreferences
	}

	type Position {
		completed: Boolean
		step: Int
	}

	type BasicInformation {
		position: Position
		title: String
		startDate: Date
		endDate: Date,
		location: Location
		hourlyRate: Int
	}

	type Location {
		address: String
		city: String
		province: String
		postalCode: String
	}

	type ServiceDetails {
		position: Position
		services: Services
		householdNeeds: HouseholdNeeds
	}

	type SeniorDetails {
		position: Position
		name: String
		gender: Gender
		birthdate: Date
		relation: String
		bio: String
		medicalConditions: String
		language: String
		picture: String
	}

	type HouseDetails {
		position: Position
		cigarette: Boolean
		pets: Boolean
		cannabis: Boolean
	}

	type CaregiverPreferences {
		position: Position
		availability: Availability
		gender: Gender
		driversLicense: Boolean
		additionalInformation: String
	}
`