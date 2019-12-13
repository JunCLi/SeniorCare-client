import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import AuthLoading from '../screens/authloading/AuthLoading'
import AuthStack from './authStacks/AuthStack'
import FamilyAppStack from './appStacks/FamilyAppStack'
import CaregiverAppStack from './appStacks/CaregiverAppStack'

const AppNavigator = createAppContainer(
	createSwitchNavigator({
		AuthLoading: AuthLoading,
		Auth: AuthStack,
		FamilyApp: FamilyAppStack,
		CaregiverApp: CaregiverAppStack,
	}, {
		initialRouteName: 'AuthLoading'
	})
)

export default AppNavigator