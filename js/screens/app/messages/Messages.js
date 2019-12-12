import React from 'react'

import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks'
import { GET_MESSAGES, GET_CONVERSATIONS, CONVERSATION_SUBSCRIPTION } from '../../../graphql/queries/messagesQueries'

import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

import ConversationItem from '../../../components/listItem/conversation/Conversation'

const Messages = props => {
	const { data } = useQuery(GET_CONVERSATIONS)

	const goToConversation = (conversationId, recipient) => {
		props.navigation.navigate('Conversation', {
			conversationId,
			recipient,
		})
	}

	useSubscription(CONVERSATION_SUBSCRIPTION, {
		onSubscriptionData: ({ client, subscriptionData }) => {
			const newConversation = subscriptionData.data.conversationAdded
			const data = client.readQuery({
				query: GET_CONVERSATIONS,
			})

			client.writeQuery({
				query: GET_CONVERSATIONS,
				data: {
					getConversations: [...data.getConversations, newConversation]
				}
			})
		}
	})

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : null}
			keyboardVerticalOffset={styles.keyboardOffset.margin}
			style={styles.avoidKeyboard}
		>
			<SafeAreaView style={styles.backgroundBlue}>
				<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
				<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
					<View style={styles.searchContainer}>
						<Text style={styles.searchText}>Search</Text>
					</View>

					{ data && data.getConversations.map(conversation => (
						<ConversationItem
							key={conversation.id}
							recipient={conversation.recipient}
							handlePress={() => goToConversation(conversation.id, conversation.recipient)}
						/>
					))}
				</ScrollView>
			</SafeAreaView>

		</KeyboardAvoidingView>
	)
}

export default Messages