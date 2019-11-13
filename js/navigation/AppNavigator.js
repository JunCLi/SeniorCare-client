import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import AuthStack from './authStacks/AuthStack'
import AppStack from './appStacks/AppStack'
import AuthLoading from '../screens/authloading/AuthLoading'

const AppNavigator = createAppContainer(
	createSwitchNavigator({
		AuthLoading: AuthLoading,
		Auth: AuthStack,
		App: AppStack,
	}, {
		initialRouteName: 'Auth'
	})
)

export default AppNavigator