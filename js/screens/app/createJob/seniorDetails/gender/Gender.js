import React from 'react'

import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/singleSelect/BlueWhiteButtons'

const Gender = props => {
	const { values, handleChange, setFieldValue } = props.formikProps

	const genderOptions = [
		{
			title: 'Female',
			value: 'female',
		},
		{
			title: 'Male',
			value: 'male',
		},
		{
			title: 'Other',
			value: 'other',
		},
	]

	const handleSelect = selection => {
		setFieldValue('gender', selection)
	}

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>What is {values.name}'s gender?</Text>
			</View>
			<BlueWhiteButtons
				buttonArray={genderOptions}
				selected={values.gender}
				handleSelect={handleSelect}
			/>
		</View>
	)
}

export default Gender