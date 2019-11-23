import React from 'react'

import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

const Gender = props => {
	const { gender, setGender } = props

	const handleSelectGender = selection => {
		setGender(selection)
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
			<View style={styles.buttonsContainer}>
				{buttonArray.map(genderButton => (
					<Button
						key={genderButton.value}
						title={genderButton.title}
						buttonStyle={gender === genderButton.value ? styles.selectedButton : styles.button}
						titleStyle={gender === genderButton.value ? styles.selectedButtonTitle :styles.buttonTitle}
						onPress={() => handleSelectGender(genderButton.value)}
					/>
				))}
			</View>
		</View>
	)
}

export default Gender