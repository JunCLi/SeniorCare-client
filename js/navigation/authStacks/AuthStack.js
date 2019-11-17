import { createStackNavigator } from 'react-navigation-stack'

import Login from '../../screens/auth/login/Login'
import Info from '../../screens/auth/info/Info'

const AuthStack = createStackNavigator({
	Info: {
		screen: Info,
		navigationOptions: () => ({
			title: 'Info',
			header: null,
		})
	},
	Login: {
		screen: Login,
		navigationOptions: () => ({
			title: 'Login',
			header: null,
		}),
	},
}, {
	initialRouteName: 'Info',
})

export default AuthStack