import React from 'react'

import { Text, TextInput, View } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from './styles'

const Bio = props => {
	const { values, setFieldValue } = props.formikProps

	const placeholderText = 'Tell us anything! You can tell us about likes/dislikes or any activities they enjoy. We like to get a sense of personality.'

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>Tell us more about {values.name}!</Text>
			</View>
			<Input
				value={values.bio}
				onChangeText={text => setFieldValue('bio', text)}
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

export default Bio