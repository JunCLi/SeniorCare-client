import { createStackNavigator } from 'react-navigation-stack'

import JobBoard from '../../screens/app/jobBoard/JobBoard'
import ViewJob from '../../screens/app/jobBoard/viewJob/ViewJob'
import ViewCaregiver from '../../screens/app/viewCaregiver/ViewCaregiver'
import Conversation from '../../screens/app/messages/conversation/Conversation'

import Overview from '../../screens/app/createJob/Overview'
import BasicInformation from '../../screens/app/createJob/basicInformation/BasicInformation'
import ServiceDetails from '../../screens/app/createJob/serviceDetails/ServiceDetails'
import SelectSenior from '../../screens/app/createJob/seniorDetails/selectSenior/SelectSenior'
import ChooseSenior from '../../screens/app/createJob/seniorDetails/chooseSenior/ChooseSenior'
import SeniorDetails from '../../screens/app/createJob/seniorDetails/SeniorDetails'
import HouseDetails from '../../screens/app/createJob/houseDetails/HouseDetails'
import CaregiverPreferences from '../../screens/app/createJob/caregiverPreference/CaregiverPreferences'
import SubmitOverview from '../../screens/app/createJob/submitOverview/SubmitOverview'
import JobCreated from '../../screens/app/createJob/jobCreated/JobCreated'

const FindStack = createStackNavigator({
	JobBoard: {
		screen: JobBoard,
		navigationOptions: () => ({
			title: 'Job Board'
		})
	},

	ViewJob: {
		screen: ViewJob,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params ? navigation.state.params.title : 'Job'
		})
	},

	InJobViewCaregiver: {
		screen: ViewCaregiver,
		navigationOptions: ({ navigation }) => ({
			title: `${navigation.state.params.userDetails.firstName} ${navigation.state.params.userDetails.lastName}`,
			
		})
	},

	InJobConversation: {
		screen: Conversation,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params
				? `${navigation.state.params.recipient.firstName} ${navigation.state.params.recipient.lastName}`
				: 'Chat',
		})
	},

	CreateJobOverview: {
		screen: Overview,
		navigationOptions: () => ({
			title: 'Overview'
		})
	},

	BasicInformation: {
		screen: BasicInformation,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},

	ServiceDetails: {
		screen: ServiceDetails,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},

	SelectSeniorProfile: {
		screen: SelectSenior,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},

	ChooseSenior: {
		screen: ChooseSenior,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},

	SeniorDetails: {
		screen: SeniorDetails,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},

	HouseDetails: {
		screen: HouseDetails,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},

	CaregiverPreferences: {
		screen: CaregiverPreferences,
		navigationOptions: () => ({
			title: 'Post a job'
		})
	},

	SubmitJobOverview: {
		screen: SubmitOverview,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params ? navigation.state.params.title : 'Job'
		})
	},

	JobCreated: {
		screen: JobCreated,
		navigationOptions: ({ navigation }) => ({
			header: null,
		})
	},
}, {
	initialRouteName: 'JobBoard',
})

export default FindStack