import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/singleSelect/BlueWhiteButtons'

const Page1 = props => {
	const { values, setFieldValue } = props.formikProps

	const availability = [
		{
			title: 'Live in',
			value: 'livein',
		},
		{
			title: 'Live out',
			value: 'liveout',
		},
	]

	const gender = [
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
		{
			title: 'No preference',
			value: 'nopref',
		},
	]
	
	const handleAvailability = value => {
		setFieldValue('availability', value)
	}

	const handlePrefGender = value => {
		setFieldValue('gender', value)
	}

	return (
		<View>
			<View style={styles.optionContainer}>
				<View style={styles.questionContainer}>
					<Text style={styles.question}>Caregiver availabilty?</Text>
				</View>
				<BlueWhiteButtons
					buttonArray={availability}
					selected={values.availability}
					handleSelect={handleAvailability}
				/>
			</View>

			<View style={styles.optionContainer}>
				<View style={styles.questionContainer}>
					<Text style={styles.question}>Preferred gender of the caregiver?</Text>
				</View>
				<BlueWhiteButtons
					buttonArray={gender}
					selected={values.gender}
					handleSelect={handlePrefGender}
					/>
			</View>
		</View>
	)
}

export default Page1