export default createjobStore = {
	getJobForm: {
		basicInformation: {
			position: {
				completed: false,
				step: 1,
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
			hourlyRate: '',
			__typename: 'BasicInformation',
		},

		serviceDetails: {
			position: {
				completed: false,
				step: 1,
				__typename: 'JobPosition',
			},
			services: '',
			householdNeeds: '',
			__typename: 'ServiceDetails',
		},

		seniorDetails: {
			position: {
				completed: false,
				step: 1,
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
				__typename: 'JobPosition',
			},
			availability: '',
			gender: null,
			driversLicense: null,
			additionalInformation: '',
			__typename: 'CaregiverPreferences',
		},
		
		__typename: 'JobForm'
	}
}