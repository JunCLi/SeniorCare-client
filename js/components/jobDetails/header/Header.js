import React from 'react'

import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

const Header = props => {
	const { title, handleMinimize, minimize } = props

	return (
		<TouchableOpacity
			onPress={handleMinimize}
			style={styles.headerContainer}
		>
			<Text style={styles.headerText}>{title}</Text>
			<Icon
				type='entypo'
				name={minimize ? 'chevron-down' : 'chevron-up'}
				iconStyle={styles.chevronIcon}
			/>
		</TouchableOpacity>
	)
}

export default Header