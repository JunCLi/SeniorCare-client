import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-elements'

import FindJobStack from './FindJobStack'
import JobsStack from './JobsStack'
import ProfileStack from './ProfileStack'
import MessagesStack from './MessagesStack'
import Home from '../../screens/app/home/Home'

const CaregiverAppStack = createBottomTabNavigator({
	FindStack: {
		screen: FindJobStack,
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
	MessagesStack: {
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
	ProfileStack: {
		screen: ProfileStack,
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

const checkHideTabBar = (hideRouteArray, state) => {
	// const isHide = state.routes.filter(route => (
	// 	hideRouteArray.filter(hideRoute => (
	// 		route.routeName === hideRoute
	// 	)).length
	// ))
	// return isHide.length ? false : true
}

const handleTabBarVisible = state => {
	// let visible = true

	// const hideTabRoutes = {
	// 	findStack: [
	// 		'Filter',
	// 		'ViewCaregiver',
	// 	],
	// 	jobsStack: [
	// 		'CreateJobOverview',
	// 		'BasicInformation',
	// 		'InJobViewCaregiver',
	// 	],
	// 	messageStack: [
	// 		'Conversation',
	// 	]
	// }

	// if (state.routeName === 'FindStack') {
	// 	visible = checkHideTabBar(hideTabRoutes.findStack, state)
	// } else if (state.routeName === 'JobsStack') {
	// 	visible = checkHideTabBar(hideTabRoutes.jobsStack, state)
	// } else if (state.routeName === 'MessagesStack') {
	// 	visible = checkHideTabBar(hideTabRoutes.messageStack, state)
	// }

	// return visible
	return true
}

export default CaregiverAppStack