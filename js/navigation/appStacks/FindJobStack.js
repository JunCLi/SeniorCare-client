import { createStackNavigator } from 'react-navigation-stack'

import FindJob from '../../screens/app/find/findJob/FindJob'
import ViewJob from '../../screens/app/find/findJob/viewJob/ViewJob'
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

	ViewJob: {
		screen: ViewJob,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params.name
		})
	},

	ApplicationSentScreen: {
		screen: JobApplied,
		navigationOptions: () => ({
			header: 'none',
		})
	},

	// Filter: {
	// 	screen: Filter,
	// 	navigationOptions: () => ({
	// 		title: 'Filter'
	// 	})
	// },

	// ViewCaregiver: {
	// 	screen: ViewCaregiver,
	// 	navigationOptions: ({ navigation }) => ({
	// 		title: `${navigation.state.params.userDetails.firstName} ${navigation.state.params.userDetails.lastName}`,
			
	// 	})
	// },

	// InFindConversation: {
	// 	screen: Conversation,
	// 	navigationOptions: ({ navigation }) => ({
	// 		title: navigation.state.params
	// 			? `${navigation.state.params.recipient.firstName} ${navigation.state.params.recipient.lastName}`
	// 			: 'Chat',
	// 	})
	// }
}, {
	initialRouteName: 'FindJobs',
})

export default FindJobStack