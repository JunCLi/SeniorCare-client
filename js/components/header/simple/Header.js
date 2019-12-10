import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

const Header = props => {
	const { title } = props
	
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	)
}

export default Header