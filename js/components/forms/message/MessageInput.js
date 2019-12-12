import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import {ADD_MESSAGE} from '../../../graphql/queries/messagesQueries'

import { Icon, Input } from 'react-native-elements'
import { styles } from './styles'

const MessageInput = props => {
	const { conversationId } = props
	const [ inputValue, setInputValue ] = useState('')
	
	const [ addMessage ] = useMutation(ADD_MESSAGE)

	const handleSubmitMessage = async () => {
		try {
			addMessage({
				variables: {input: {
					conversationId: conversationId,
					content: inputValue,
				}}
			})

			setInputValue('')
		} catch(err) {
			throw err
		}
	}

	return (
		<Input
			value={inputValue}
			onChangeText={setInputValue}
			placeholder='Send a message'
			rightIcon={
				<Icon
					type='font-awesome'
					name='send'
					iconStyle={styles.inputIcon}
					onPress={handleSubmitMessage}
				/>
			}
			placeholderTextColor={styles.placeholder.color}
			inputStyle={styles.input}
			containerStyle={styles.inputContainer}
			inputContainerStyle={styles.inputDirectContainer}
			editable
			multiline
		/>
	)
}

export default MessageInput