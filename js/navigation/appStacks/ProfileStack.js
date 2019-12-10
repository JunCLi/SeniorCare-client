import { createStackNavigator } from 'react-navigation-stack'

import Profile from '../../screens/app/profile/Profile'
import Seniors from '../../screens/app/profile/seniors/Seniors'
import ViewSenior from '../../screens/app/profile/viewSenior/ViewSenior'
import Account from '../../screens/app/profile/account/Account'

const ProfileStack = createStackNavigator({
	Profile: {
		screen: Profile,
		navigationOptions: () => ({
			title: 'Profile'
		})
	},

	MySeniors: {
		screen: Seniors,
		navigationOptions: () => ({
			title: 'Seniors'
		})
	},
	
	ViewSenior: {
		screen: ViewSenior,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params ? navigation.state.params.name : 'senior',
		})
	},

	Account: {
		screen: Account,
		navigationOptions: () => ({
			title: 'Account'
		})
	}

}, {
	initialRouteName: 'Profile',
})

export default ProfileStack