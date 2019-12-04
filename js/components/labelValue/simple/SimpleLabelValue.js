import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

const SimpleLabelValue = props => {
	const { label, value } = props

	return (
		<View style={styles.labelValueContainer}>
			<View style={styles.labelContainer}>
				<Text style={styles.label}>{label}</Text>
			</View>
			<View style={styles.valueContainer}>
				<Text style={styles.value}>{value}</Text>
			</View>
		</View>
	)
}

export default SimpleLabelValue