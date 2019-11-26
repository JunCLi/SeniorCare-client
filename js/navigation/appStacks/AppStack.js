import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-elements'

import FindStack from './FindStack'
import JobsStack from './JobsStack'
import Home from '../../screens/app/home/Home'
import Profile from '../../screens/app/profile/Profile'

const AppStack = createBottomTabNavigator({
	FindStack: {
		screen: FindStack,
		navigationOptions: () => ({
			title: 'Find',
			tabBarIcon: ({ tintColor }) => (
				<Icon 
					type='foundation'
					name='magnifying-glass'
					size={24}
					color={tintColor}	
				/>
      )
		})
	},

	JobsStack: {
		screen: JobsStack,
		navigationOptions: () => ({
			title: 'Jobs',
			tabBarIcon: ({ tintColor }) => (
				<Icon 
					type='ionicon'
					name='ios-briefcase'
					size={24}
					color={tintColor}	
				/>
      )
		})
	},
	Messages: {
		screen: Home,
		navigationOptions: () => ({
			title: 'Messages',
			tabBarIcon: ({ tintColor }) => (
				<Icon 
					type='simple-line-icon'
					name='bubble'
					size={24}
					color={tintColor}	
				/>
      )
		})
	},
	Profile: {
		screen: Profile,
		navigationOptions: () => ({
			title: 'Profile',
			tabBarIcon: ({ tintColor }) => (
				<Icon 
					type='antdesign'
					name='user'
					size={24}
					color={tintColor}	
				/>
      )
		})
	},
}, {
	initialRouteName: 'JobsStack',
	defaultNavigationOptions: ({ navigation }) => ({
		tabBarVisible: handleTabBarVisible(navigation.state)
	}),
	tabBarOptions: {
    showLabel: true,
    activeTintColor: '#3F7DFB',
    inactiveTintColor: '#A3A3A3',
    style: {
      backgroundColor: '#f7f8f8',
      borderTopWidth: 0.7,
      borderColor: '#A3A3A3'
    },
  }
})

const handleTabBarVisible = state => {
	let visible = true
	if (state.routeName === 'FindStack') {
		const isFilter = state.routes.filter(route => (
			route.routeName === 'Filter'
			|| route.routeName === 'ViewCaregiver'
		))
		visible = isFilter.length ? false : true
	} else if (state.routeName === 'JobsStack') {
		const isFilter = state.routes.filter(route => (
			route.routeName === 'CreateJobOverview'
		))
		visible = isFilter.length ? false : true
	}

	return visible
}

export default AppStack