import { createStackNavigator } from 'react-navigation-stack'

import TempLogin from '../../screens/auth/login/login'

const AuthStack = createStackNavigator({
	Login: {
		screen: TempLogin,
		navigationOptions: () => ({
			title: 'Login',
			header: null,
		}),
	},
}, {
	initialRouteName: 'Login',
})

export default AuthStack