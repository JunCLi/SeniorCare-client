import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

const MyMessage = props => {
	const { content } = props

	return (
		<View style={styles.mainContainer}>
			<View style={styles.messageContainer}>
				<Text style={styles.message}>{content}</Text>
			</View>
		</View>
	)
}

export default MyMessage