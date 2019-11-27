import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from './styles'

const Title = props => {
	const { values, handleChange } = props.formikProps

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>What is the title of this job?</Text>
			</View>
			<Input
				value={values.title}
				onChangeText={handleChange('title')}
				editable={true}
				placeholder='Granny Needs Help'
				containerStyle={styles.inputContainer}
				inputStyle={styles.input}
			/>
		</View>
	)
}

export default Title