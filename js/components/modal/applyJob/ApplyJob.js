import React, { useState, useEffect } from 'react'

import { Animated, Keyboard, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { dynamicStyles, styles } from './styles'
import Modal from 'react-native-modal'

const ApplyJob = props => {
	const { modalVisible, handleShowModal, message, setMessage, handlePress } = props
	const [ keyboardMargin, setKeyboardMargin ] = useState(0)

	Keyboard.addListener('keyboardDidShow', () => keyboardAnimate(true))
	Keyboard.addListener('keyboardDidHide', () => keyboardAnimate(false))


	const keyboardAnimate = show => {
		if (show) {
			setKeyboardMargin(-300)
		} else {
			setKeyboardMargin(0)
		}
	}

	return (
		<Modal
			animationType='fade'
			hasBackdrop={true}
			isVisible={modalVisible}
			backdropOpacity={0.5}
			onBackdropPress={handleShowModal}
			onSwipeComplete={handleShowModal}
			swipeDirection='down'
		>
			<View style={dynamicStyles(keyboardMargin).modalContainer}>
				<TouchableOpacity
					style={styles.iconContainer}
					onPress={handleShowModal}
				>
					<Icon
						type='ant-design'
						name='close'
						iconStyle={styles.closeIcon}
					/>
				</TouchableOpacity>

				<Text style={styles.title}>Add a message</Text>
				<Text style={styles.description}>You can add a message to the family here. You can talk about any specific skills and/or experiences that you think will be valuable to your application.</Text>
				<Input
					value={message}
					onChangeText={setMessage}
					inputStyle={styles.input}
					numberOfLines={4}
					containerStyle={styles.inputContainer}
					inputContainerStyle={styles.inputDirectContainer}
					editable
					multiline
				/>
				<Button
					title='Apply'
					onPress={handlePress}
					buttonStyle={styles.button}
					titleStyle={styles.buttonText}
				/>
			</View>
		</Modal>
	)
}

export default ApplyJob