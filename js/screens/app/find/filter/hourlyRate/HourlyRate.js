import React, { useState } from 'react'

import { View, Text } from 'react-native'
import { styles } from './styles'

import FilterSlider from '../../../../../components/sliders/filterSlider/FilterSlider'

const HourlyRate = props => {
	const { hourlyRate = 20, setHourlyRate } = props 

	const sliderProps = {
		max: 75,
		min: 14,
	}

	const handleHourlyRate = value => {
		setHourlyRate(value)
	}

	const handleDisplayValue = value => {
		return `$${Math.round(value)}`
	}

	return (
		<View style={styles.optionsContainer}>
			<Text style={styles.title}>Maximum hourly rate</Text>
			<Text style={styles.hourlyRateWarning}>*Minimum wage varies per province/territory in Canada</Text>
			<FilterSlider
				initialValue={hourlyRate}
				sliderProps={sliderProps}
				handleFinalValue={handleHourlyRate}
				handleDisplayValue={handleDisplayValue}
				displayMin={true}
			/>
		</View>
		
	)
}

export default HourlyRate