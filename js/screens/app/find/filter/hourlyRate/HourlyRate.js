import React, { useState } from 'react'

import { View, Text } from 'react-native'
import { styles } from './styles'

import FilterSlider from '../../../../../components/sliders/filterSlider/FilterSlider'

const HourlyRate = props => {
	const [ hourlyRate, setHourlyRate ] = useState({
		value: 20,
		max: 75,
		min: 14,
	})

	const handleHourlyRate = value => {
		setHourlyRate({
			...hourlyRate,
			value: value,
		})
	}

	// const { hourlyRate, handleHourlyRate } = props 

	const handleDisplayValue = value => {
		return `$${Math.round(value)}`
	}

	return (
		<View style={styles.optionsContainer}>
			<Text style={styles.title}>Maximum hourly rate</Text>
			<Text style={styles.hourlyRateWarning}>*Minimum wage varies per province/territory in Canada</Text>
			<FilterSlider
				sliderProps={hourlyRate}
				handleOnChange={handleHourlyRate}
				handleDisplayValue={handleDisplayValue}
				displayMin={true}
			/>
		</View>
		
	)
}

export default HourlyRate