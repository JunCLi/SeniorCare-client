import React from 'react'

import { View, Text } from 'react-native'
import { styles } from './styles'
import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/singleSelect/BlueWhiteButtons'

const Gender = props => {
	const { gender, setGender } = props

	const handleSelectGender = selection => {
		const newValue = selection === gender ? '' : selection
		setGender(newValue)
	}

	const buttonArray = [
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
			title: 'No Preference',
			value: 'nopref',
		},
	]

	return (
		<View style={styles.optionsContainer}>
			<Text style={styles.title}>Gender</Text>
			<BlueWhiteButtons
				selected={gender}
				buttonArray={buttonArray}
				handleSelect={handleSelectGender}
			/>
		</View>
	)
}

export default Gender