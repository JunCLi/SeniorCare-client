import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-elements'

import FindStack from './FindStack'
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

	Jobs: {
		screen: Home,
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
	initialRouteName: 'FindStack',
	defaultNavigationOptions: ({ navigation }) => {
		const { state } = navigation
		if (state.routeName === 'FindStack') {
			const isFilter = state.routes.filter(route => (
				route.routeName === 'Filter'
				|| route.routeName === 'ViewCaregiver'
			))
			return {
				tabBarVisible: isFilter.length ? false : true
			}
		}
	},
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

export default AppStack