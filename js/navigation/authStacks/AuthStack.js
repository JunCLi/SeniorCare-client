import { createStackNavigator } from 'react-navigation-stack'

import Login from '../../screens/auth/login/login'

const AuthStack = createStackNavigator({
	Login: {
		screen: Login,
		navigationOptions: () => ({
			title: 'Login',
			header: null,
		}),
	},
}, {
	initialRouteName: 'Login',
})

export default AuthStack