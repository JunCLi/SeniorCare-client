import { createStackNavigator } from 'react-navigation-stack'

import Login from '../../screens/auth/login/Login'
import Info from '../../screens/auth/info/Info'
import Signup from '../../screens/auth/signup/Signup'

const AuthStack = createStackNavigator({
	Info: {
		screen: Info,
		navigationOptions: () => ({
			title: 'Info',
			header: null,
		})
	},
	Signup: {
		screen: Signup,
		navigationOptions: () => ({
			title: 'Info',
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