import { createStackNavigator } from 'react-navigation-stack'

import Login from '../../screens/auth/login/Login'
import Info from '../../screens/auth/info/Info'
// import SignupStack from './SignupStack'
import Signup from '../../screens/auth/signup/Signup'
import ChooseSignup from '../../screens/auth/chooseSignup/ChooseSignup'

const AuthStack = createStackNavigator({
	Info: {
		screen: Info,
		navigationOptions: () => ({
			title: 'Info',
			header: null,
		})
	},
	// Signup: SignupStack,

	Signup: {
		screen: Signup,
		navigationOptions: () => ({
			title: 'Signup',
		})
	},

	ChooseSignup: {
		screen: ChooseSignup,
		navigationOptions: () => ({
			title: 'Signup'
		})
	},

	Login: {
		screen: Login,
		navigationOptions: () => ({
			title: 'Login',
		}),
	},
}, {
	initialRouteName: 'Info',
})

export default AuthStack