import React from 'react'

import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

const Availability = props => {
	const { availability, setAvailability } = props

	const handleSelectAvailability = selection => {
		setAvailability(selection)
	}

	const buttonArray = [
		{
			title: 'Live in',
			value: 'livein',
		},
		{
			title: 'Live out',
			value: 'liveout',
		},
	]

	return (
		<View style={styles.optionsContainer}>
			<Text style={styles.title}>Availabiltiy</Text>
			<View style={styles.buttonsContainer}>
				{buttonArray.map(availabilityButton => (
					<Button
						key={availabilityButton.value}
						title={availabilityButton.title}
						buttonStyle={availability === availabilityButton.value ? styles.selectedButton : styles.button}
						titleStyle={availability === availabilityButton.value ? styles.selectedButtonTitle :styles.buttonTitle}
						onPress={() => handleSelectAvailability(availabilityButton.value)}
					/>
				))}
			</View>
		</View>
	)
}

export default Availability