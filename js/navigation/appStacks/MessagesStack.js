import { createStackNavigator } from 'react-navigation-stack'

import Messages from '../../screens/app/messages/Messages'
import Conversation from '../../screens/app/messages/conversation/Conversation'

const MessagesStack = createStackNavigator({
	Messages: {
		screen: Messages,
		navigationOptions: () => ({
			title: 'Chats'
		})
	},

	Conversation: {
		screen: Conversation,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params
				? `${navigation.state.params.recipient.firstName} ${navigation.state.params.recipient.lastName}`
				: 'Chat',
		})
	}

}, {
	initialRouteName: 'Messages',
})

export default MessagesStack