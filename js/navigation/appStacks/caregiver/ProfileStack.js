import { createStackNavigator } from 'react-navigation-stack'

import Profile from '../../../screens/app/profile/caregiver/Profile'
import Seniors from '../../../screens/app/profile/seniors/Seniors'
import ViewSenior from '../../../screens/app/profile/viewSenior/ViewSenior'
import Account from '../../../screens/app/profile/account/Account'

const ProfileStack = createStackNavigator({
	Profile: {
		screen: Profile,
		navigationOptions: () => ({
			title: 'Profile'
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