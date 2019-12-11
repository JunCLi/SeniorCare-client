import React, { useState } from 'react'

import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks'
import { START_CONVERSATION, ADD_MESSAGE, GET_MESSAGES, GET_CONVERSATIONS } from '../../../../graphql/queries/messagesQueries'

import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { styles } from './styles'

import MyMessage from '../../../../components/listItem/message/myMessage/MyMessage'
import CorrespondantMessage from '../../../../components/listItem/message/correspondantMessage/CorrespondantMessage'

const Conversation = props => {
	const { conversationId, recipient } = props.navigation.state.params
	const { avatar } = recipient
	const [ inputValue, setInputValue ] = useState('')

	// console.log('test', conversationId, recipient)

	const { data } = useQuery(GET_MESSAGES, {
		variables: {
			conversationId: conversationId,
		}
	})

	// console.log('data', data)

	const handleMessageType = message => {
		return message.authorId === recipient.userId
			? <CorrespondantMessage
					key={message.dateCreated}
					avatar={avatar}
					content={message.content}
				/>
			: <MyMessage
					key={message.dateCreated}
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


				<Input
					value={inputValue}
					onChangeText={setInputValue}
					placeholder='Send a message'
					rightIcon={
						<Icon
							type='font-awesome'
							name='send'
							iconStyle={styles.inputIcon}
						/>
					}
					placeholderTextColor={styles.placeholder.color}
					inputStyle={styles.input}
					containerStyle={styles.inputContainer}
					inputContainerStyle={styles.inputDirectContainer}
					editable
					multiline
				/>
			</View>
		</KeyboardAvoidingView>
	)
}

export default Conversation

// value={values.email}
// 					keyboardType='email-address'
// 					onChangeText={handleChange('email')}
// 					label='Email'
// 					labelStyle={styles.label}
// 					placeholder='me@email.com'
// 					placeholderTextColor={styles.placeholderTextColor.color}
// 					editable={true}
// 					autoCompleteType='email'
// 					inputStyle={styles.input}
// 					containerStyle={styles.inputContainer}
// 					leftIconContainerStyle={styles.leftIconContainer}