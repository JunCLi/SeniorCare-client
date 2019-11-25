import { createStackNavigator } from 'react-navigation-stack'

import JobBoard from '../../screens/app/jobBoard/JobBoard'

const FindStack = createStackNavigator({
	JobBoard: {
		screen: JobBoard,
		navigationOptions: () => ({
			title: 'Job Board'
		})
	},

}, {
	initialRouteName: 'JobBoard',
})

export default FindStack