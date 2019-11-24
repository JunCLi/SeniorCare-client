import gql from 'graphql-tag'

export default caregiverSchema = gql`
	extend type Mutation {
		saveCaregiverFilter(input: FilterCaregivers): CaregiverFilter
	}

	type CaregiverFilter {
		gender: String
		availability: String
		hourlyRate: Int
		yearsExperience: Int
	}

	extend type Query {
		getCaregiverFilter: CaregiverFilter
	}
`