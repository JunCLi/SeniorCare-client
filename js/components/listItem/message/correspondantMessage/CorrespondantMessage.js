import React from 'react'

import { Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { styles } from './styles'

const CorrespondantMessage = props => {
	const { avatar, content } = props

	return (
		<View style={styles.mainContainer}>
			<Avatar
				source={{ uri: avatar }}
				rounded
			/>
			<View style={styles.messageContainer}>
				<Text style={styles.message}>{content}</Text>
			</View>
		</View>
	)
}

export default CorrespondantMessage