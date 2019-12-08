import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

const LabelValue = props => {
	const { label, valueArray, capitalize } = props

	return (
		<View style={styles.labelValueContainer}>
			<View style={styles.labelContainer}>
				<Text style={styles.label}>{label}</Text>
			</View>
			<View style={styles.valueContainer}>
				{ valueArray.map(value => (
					capitalize 
						? <Text key={value} style={styles.capitalizeValue}>{value}</Text>
						: <Text key={value} style={styles.value}>{value}</Text>
				))}
				
			</View>
		</View>
	)
}

export default LabelValue