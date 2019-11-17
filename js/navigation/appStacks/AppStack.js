import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'

import TempLogin from '../../screens/auth/login/Login'

const AppStack = createBottomTabNavigator({
	Home: {
		screen: TempLogin,
		navigationOptions: () => ({
			title: 'Home'
		})
	}
})

export default AppStack