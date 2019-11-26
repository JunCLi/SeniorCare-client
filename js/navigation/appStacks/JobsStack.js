import { createStackNavigator } from 'react-navigation-stack'

import JobBoard from '../../screens/app/jobBoard/JobBoard'
import Overview from '../../screens/app/createJob/Overview'

const FindStack = createStackNavigator({
	JobBoard: {
		screen: JobBoard,
		navigationOptions: () => ({
			title: 'Job Board'
		})
	},

	CreateJobOverview: {
		screen: Overview,
		navigationOptions: () => ({
			title: 'Overview'
		})
	}
}, {
	initialRouteName: 'JobBoard',
})

export default FindStack