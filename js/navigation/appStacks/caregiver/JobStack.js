import React from 'react'

import { createStackNavigator } from 'react-navigation-stack'

import JobBoard from '../../../screens/app/caregiverJobBoard/JobBoard'
import ViewJob from '../../../screens/app/caregiverJobBoard/ViewJob/ViewJob'

const JobStack = createStackNavigator({
	JobBoard: {
		screen: JobBoard,
		navigationOptions: () => ({
			title: 'Job Dashboard'
		})
	},

	ViewJob: {
		screen: ViewJob,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params.name
		})
	},
}, {
	initialRouteName: 'JobBoard',
})

export default JobStack