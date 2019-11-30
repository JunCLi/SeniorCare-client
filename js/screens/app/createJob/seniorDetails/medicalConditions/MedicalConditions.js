import React from 'react'

import { Text, TextInput, View } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from './styles'

const MedicalConditions = props => {
	const { values, setFieldValue } = props.formikProps

	const placeholderText = 'Tell us about any medical conditions that we need to be aware of.'

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>Are there any medical conditions to be aware of?</Text>
			</View>
			<Input
				value={values.medicalConditions}
				onChangeText={text => setFieldValue('medicalConditions', text)}
				editable={true}
				multiline={true}
				numberOfLines={4}
				placeholder={placeholderText}
				containerStyle={styles.inputContainer}
				inputContainerStyle={styles.innerInputContainer}
				inputStyle={styles.input}
			/>
		</View>
	)
}

export default MedicalConditions