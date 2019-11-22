import { createStackNavigator } from 'react-navigation-stack'

import Find from '../../screens/app/find/Find'

const FindStack = createStackNavigator({
	Find: {
		screen: Find,
		navigationOptions: () => ({
			title: 'Find'
		})
	},
}, {
	initialRouteName: 'Find',
})

export default FindStack