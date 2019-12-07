// import gql from 'graphql-tag'

// export default jobSchema = gql`
// 	extend type Query {
// 		# getJobForm: JobForm
// 		test: Test
// 	}
	
// 	type Test

// 	type JobForm {
// 		basicInformation: BasicInformation
// 		serviceDetails: ServiceDetails
// 		seniorDetails: SeniorDetails
// 		houseDetails: HouseDetails
// 		caregiverPreferences: CaregiverPreferences
// 		additionalInformation: String
// 	}

// 	type Position {
// 		completed: Boolean
// 		step: Int
// 		totalSteps: Int
// 	}

// 	type BasicInformation {
// 		position: Position
// 		title: String
// 		startDate: Date
// 		endDate: Date,
// 		location: Location
// 		hourlyRate: Int
// 	}

// 	type Location {
// 		address: String
// 		city: String
// 		province: String
// 		postalCode: String
// 	}

// 	type ServiceDetails {
// 		position: Position
// 		services: [Services]
// 		householdNeeds: [HouseholdNeeds]
// 	}

// 	type SeniorDetails {
// 		position: Position
// 		id: ID
// 		name: String
// 		gender: Gender
// 		birthdate: Date
// 		relation: String
// 		bio: String
// 		medicalConditions: String
// 		language: [String]
// 		picture: String
// 	}

// 	type HouseDetails {
// 		position: Position
// 		cigarette: Boolean
// 		pets: Boolean
// 		cannabis: Boolean
// 	}

// 	type CaregiverPreferences {
// 		position: Position
// 		availability: Availability
// 		genderPref: Gender
// 		driversLicense: Boolean
// 		additionalInformation: String
// 	}

// 	extend type Mutation {
// 		changeFormPosition(input: ChangeFormPositionObject): Placeholder
// 		# addSeniorToForm(input: seniorDetailsInput): Placeholder
// 	}

// 	input seniorDetailsInput {
// 		position: Position
// 		id: ID
// 		name: String
// 		gender: Gender
// 		birthdate: Date
// 		relation: String
// 		bio: String
// 		medicalConditions: String
// 		language: [String]
// 		picture: String
// 	}

// 	input ChangeFormPositionObject {
// 		section: Section
// 		direction: FormDirection!
// 		payload: JobForm
// 	}
	
// 	type Placeholder {
// 		Message: String
// 	}
// `