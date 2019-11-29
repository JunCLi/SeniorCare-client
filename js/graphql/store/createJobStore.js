export default createjobStore = {
	getJobForm: {
		formStarted: false,
		basicInformation: {
			position: {
				completed: false,
				step: 1,
				totalSteps: 4,
				__typename: 'JobPosition',
			},
			title: '',
			startDate: '',
			endDate: '',
			location: {
				address: '',
				city: '',
				province: '',
				postalCode: '',
				__typename: 'Location',
			},
			hourlyRate: 14,
			__typename: 'BasicInformation',
		},

		serviceDetails: {
			position: {
				completed: false,
				step: 1,
				totalSteps: 2,
				__typename: 'JobPosition',
			},
			services: [],
			householdNeeds: [],
			__typename: 'ServiceDetails',
		},

		seniorDetails: {
			position: {
				completed: false,
				step: 1,
				totalSteps: 8,
				__typename: 'JobPosition',
			},
			name: '',
			gender: '',
			birthdate: '',
			relation: '',
			bio: '',
			medicalConditions: '',
			language: '',
			picture: '',
			__typename: 'SeniorDetails',
		},

		houseDetails: {
			position: {
				completed: false,
				step: 1,
				totalSteps: 1,
				__typename: 'JobPosition',
			},
			cigarette: null,
			pets: null,
			cannabis: null,
			__typename: 'HouseDetails',
		},

		caregiverPreferences: {
			position: {
				completed: false,
				step: 1,
				totalSteps: 2,
				__typename: 'JobPosition',
			},
			availability: '',
			gender: null,
			driversLicense: null,
			__typename: 'CaregiverPreferences',
		},
		additionalInformation: '',
		__typename: 'JobForm'
	}
}