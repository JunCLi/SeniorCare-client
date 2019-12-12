import React, { useRef } from 'react'

import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks'
import { ADD_MESSAGE, GET_MESSAGES, MESSAGE_SUBSCRIPTION } from '../../../../graphql/queries/messagesQueries'

import { KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native'
import { styles } from './styles'

import MyMessage from '../../../../components/listItem/message/myMessage/MyMessage'
import CorrespondantMessage from '../../../../components/listItem/message/correspondantMessage/CorrespondantMessage'
import MessageInput from '../../../../components/forms/message/MessageInput'

const Conversation = props => {
	const { conversationId, recipient } = props.navigation.state.params
	const { avatar } = recipient
	const scrollView = useRef(null)

	const { data } = useQuery(GET_MESSAGES, {
		variables: {input: {
			conversationId: conversationId,
		}}
	})

	useSubscription(MESSAGE_SUBSCRIPTION, {
		variables: {input: {
			conversationId: conversationId,
		}},
		onSubscriptionData: ({ client, subscriptionData }) => {
			const newMessage = subscriptionData.data.messageAdded
			const data = client.readQuery({
				query: GET_MESSAGES,
				variables: {input: {
					conversationId: conversationId
				}},
			})

			client.writeQuery({
				query: GET_MESSAGES,
				variables: {input: {
					conversationId: conversationId
				}},
				data: {
					getMessages: [...data.getMessages, newMessage]
				}
			})
		}
	})

	const handleMessageType = message => {
		return message.authorId === recipient.userId
			? <CorrespondantMessage
					key={message.id}
					avatar={avatar}
					content={message.content}
				/>
			: <MyMessage
					key={message.id}
					content={message.content}
				/>
	}

	const handleScrollToBottom = height => {
		scrollView.current.scrollTo({y: height, animated: false})
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : null}
			keyboardVerticalOffset={styles.keyboardOffset.margin}
			style={styles.avoidKeyboard}
		>
			<View style={styles.backgroundBlue}>
				<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
				<ScrollView
					style={styles.mainContainer}
					contentContainerStyle={styles.scrollViewContainer}
					ref={scrollView}
					onContentSizeChange={(width, height) => handleScrollToBottom(height) }
				>

					{	data && data.getMessages.map(message => (
						handleMessageType(message)
					))}

				</ScrollView>

				<MessageInput conversationId={conversationId} />
			</View>
		</KeyboardAvoidingView>
	)
}

export default Conversation