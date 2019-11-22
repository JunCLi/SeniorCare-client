import { createStackNavigator } from 'react-navigation-stack'

import Find from '../../screens/app/find/Find'
import Filter from '../../screens/app/find/filter/FilterFind'

const FindStack = createStackNavigator({
	Find: {
		screen: Find,
		navigationOptions: () => ({
			title: 'Find'
		})
	},

	Filter: {
		screen: Filter,
		navigationOptions: () => ({
			title: 'Filter'
		})
	}
}, {
	initialRouteName: 'Find',
})

export default FindStack