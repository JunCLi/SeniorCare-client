import React, { useState } from 'react'

import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks'
import { ADD_MESSAGE, GET_MESSAGES, MESSAGE_SUBSCRIPTION } from '../../../../graphql/queries/messagesQueries'

import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { styles } from './styles'

import MyMessage from '../../../../components/listItem/message/myMessage/MyMessage'
import CorrespondantMessage from '../../../../components/listItem/message/correspondantMessage/CorrespondantMessage'
import MessageInput from '../../../../components/forms/message/MessageInput'

const Conversation = props => {
	const { conversationId, recipient } = props.navigation.state.params
	const { avatar } = recipient

	const { data } = useQuery(GET_MESSAGES, {
		variables: {
			conversationId: conversationId,
		}
	})

	useSubscription(MESSAGE_SUBSCRIPTION, {
		variables: {
			conversationId: conversationId,
		},
		onSubscriptionData: ({ client, subscriptionData }) => {
			console.log('test')
			const newMessage = subscriptionData.data.messageAdded
			const data = client.readQuery({ query: GET_MESSAGES, variables: { conversationId } })

			console.log('newMessage', newMessage)
			client.writeQuery({
				query: GET_MESSAGES,
				variables: { conversationId },
				data: {
					getMessages: [...data.getMessages, newMessage]
				}
			})
		}
	})

	const handleMessageType = message => {
		// console.log('message', message)
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

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : null}
			keyboardVerticalOffset={styles.keyboardOffset.margin}
			style={styles.avoidKeyboard}
		>
			<View style={styles.backgroundBlue}>
				<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
				<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>

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