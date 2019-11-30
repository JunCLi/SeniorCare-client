import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from './styles'

const Title = props => {
	const { values, handleChange } = props.formikProps

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>Please add a picture of {values.name}</Text>
				<Text style={styles.questionSubheader}>Adding a picture helps complete your profiel and increases your chances to be viewed.</Text>
				<Text>To be implemented</Text>
			</View>
		</View>
	)
}

export default Title