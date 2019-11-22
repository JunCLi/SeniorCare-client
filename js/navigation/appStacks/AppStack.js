import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'

import FindStack from './FindStack'
import Home from '../../screens/app/home/Home'
import Profile from '../../screens/app/profile/Profile'

const AppStack = createBottomTabNavigator({
	FindStack: {
		screen: FindStack,
		navigationOptions: () => ({
			title: 'Find'
		})
	},

	Jobs: {
		screen: Home,
		navigationOptions: () => ({
			title: 'Jobs'
		})
	},
	Messages: {
		screen: Home,
		navigationOptions: () => ({
			title: 'Messages'
		})
	},
	Profile: {
		screen: Profile,
		navigationOptions: () => ({
			title: 'Profile'
		})
	},
}, {
	initialRouteName: 'FindStack'
})

export default AppStack