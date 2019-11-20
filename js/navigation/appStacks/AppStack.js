import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'

// import TempLogin from '../../screens/auth/login/Login'
// import Info from '../../screens/auth/info/Info'
import Home from '../../screens/app/home/Home'

const AppStack = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: () => ({
			title: 'Home'
		})
	}
})

export default AppStack