import React, { useState } from 'react'

import { Platform, Text, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Input } from 'react-native-elements'
import { styles } from './styles'

const Birthdate = props => {
	const { values, handleChange, setFieldValue } = props.formikProps
	const [ chosenDate, setChosenDate ] = useState(values.birthdate)

	const setDate = (event, date) => {
		setChosenDate(date)
		setFieldValue('birthdate', new Date(date).toISOString())
	}

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>What is {values.name}'s birthdate?</Text>
			</View>
			<DateTimePicker
				value={chosenDate}
				onChange={setDate}
			/>
		</View>
	)
}

export default Birthdate