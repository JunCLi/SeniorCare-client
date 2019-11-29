import React from 'react'

import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/singleSelect/BlueWhiteButtons'

const Availability = props => {
	const { availability, setAvailability } = props

	const handleSelectAvailability = selection => {
		const newValue = selection === availability ? '' : selection
		setAvailability(newValue)
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
			<BlueWhiteButtons
				selected={availability}
				buttonArray={buttonArray}
				handleSelect={handleSelectAvailability}
			/>
		</View>
	)
}

export default Availability