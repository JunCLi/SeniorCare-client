import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from './styles'

const Relation = props => {
	const { values, handleChange } = props.formikProps

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>How is {values.name} related to you?</Text>
			</View>
			<Input
				value={values.relation}
				onChangeText={handleChange('relation')}
				editable={true}
				placeholder='Grandmother/Mom/Neighbor'
				containerStyle={styles.inputContainer}
				inputStyle={styles.input}
			/>
		</View>
	)
}

export default Relation