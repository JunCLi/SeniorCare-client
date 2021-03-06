import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-elements'

import FindJobStack from './FindJobStack'
import JobStack from './caregiver/JobStack'
import ProfileStack from './caregiver/ProfileStack'
import MessagesStack from './MessagesStack'
import Home from '../../screens/app/home/Home'

const CaregiverAppStack = createBottomTabNavigator({
	FindJobStack: {
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

	JobStack: {
		screen: JobStack,
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
		screen: MessagesStack,
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
	initialRouteName: 'FindJobStack',
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
	const isHide = state.routes.filter(route => (
		hideRouteArray.filter(hideRoute => (
			route.routeName === hideRoute
		)).length
	))
	return isHide.length ? false : true
}

const handleTabBarVisible = state => {
	let visible = true

	const hideTabRoutes = {
		findJobStack: [
			'ApplyJob',
			'ApplicationSentScreen',
		],
		jobStack: [
			'ViewJob',
			// 'BasicInformation',
			// 'InJobViewCaregiver',
		],
		messageStack: [
			'Conversation',
		]
	}

	if (state.routeName === 'FindJobStack') {
		visible = checkHideTabBar(hideTabRoutes.findJobStack, state)
	} else if (state.routeName === 'JobStack') {
		visible = checkHideTabBar(hideTabRoutes.jobStack, state)
	} 
	// else if (state.routeName === 'MessagesStack') {
	// 	visible = checkHideTabBar(hideTabRoutes.messageStack, state)
	// }

	return visible
}

export default CaregiverAppStack