import { createStackNavigator } from 'react-navigation-stack'

import FindJob from '../../screens/app/find/findJob/FindJob'
import ApplyJob from '../../screens/app/find/findJob/viewJob/ApplyToJob'
import JobApplied from '../../screens/app/find/findJob/jobApplied/JobApplied'
import Filter from '../../screens/app/find/filter/FilterFind'
import ViewCaregiver from '../../screens/app/viewCaregiver/ViewCaregiver'
import Conversation from '../../screens/app/messages/conversation/Conversation'

const FindJobStack = createStackNavigator({
	FindJobs: {
		screen: FindJob,
		navigationOptions: () => ({
			title: 'Find'
		})
	},

	ApplyJob: {
		screen: ApplyJob,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params.name
		})
	},

	ApplicationSentScreen: {
		screen: JobApplied,
		navigationOptions: () => ({
			header: null,
		})
	},
}, {
	initialRouteName: 'FindJobs',
})

export default FindJobStack