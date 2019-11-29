import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from './styles'

const Name = props => {
	const { values, handleChange } = props.formikProps

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>What is the senior's name?</Text>
			</View>
			<Input
				value={values.name}
				onChangeText={handleChange('name')}
				editable={true}
				placeholder='Lucinda'
				containerStyle={styles.inputContainer}
				inputStyle={styles.input}
			/>
		</View>
	)
}

export default Name