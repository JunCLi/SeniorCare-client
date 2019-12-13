import React from 'react'

import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks'
import { GET_LOGGED_USER_CACHE } from '../../../graphql/queries/authQueries'
import { GET_CONVERSATIONS, CONVERSATION_SUBSCRIPTION } from '../../../graphql/queries/messagesQueries'

import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

import ConversationItem from '../../../components/listItem/conversation/Conversation'

const Messages = props => {
	const { data } = useQuery(GET_CONVERSATIONS)
	const { data: userData } = useQuery(GET_LOGGED_USER_CACHE)

	const goToConversation = (conversationId, recipient) => {
		props.navigation.navigate('Conversation', {
			conversationId,
			recipient,
		})
	}

	useSubscription(CONVERSATION_SUBSCRIPTION, {
		variables: {
			userId: userData.getLoggedUser.userId
		},
		onSubscriptionData: ({ client, subscriptionData }) => {
			const conversationObject = subscriptionData.data.conversationAdded
			const newConversation = conversationObject.familyId === userData.getLoggedUser.userId
				? {
						id: conversationObject.id,
						familyId: conversationObject.familyId,
						caregiverId: conversationObject.caregiverId,
						recipient: conversationObject.caregiver,
						__typename: 'Caregiver',
					}
				: {
						id: conversationObject.id,
						familyId: conversationObject.familyId,
						caregiverId: conversationObject.caregiverId,
						recipient: conversationObject.family,
						__typename: 'Caregiver',
					}
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