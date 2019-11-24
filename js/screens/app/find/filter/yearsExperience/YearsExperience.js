import React, { useState } from 'react'

import { View, Text } from 'react-native'
import { styles } from './styles'

import FilterSlider from '../../../../../components/sliders/filterSlider/FilterSlider'

const YearsExperience = props => {
	const { yearsExperience = 5, setYearsExperience } = props

	const sliderProps = {
		max: 20,
		min: 0,
	}

	const handleYearsExperience = value => {
		setYearsExperience(value)
	}

	const handleDisplayValue = value => {
		return `${Math.round(value)}`
	}

	return (
		<View style={styles.optionsContainer}>
			<Text style={styles.title}>Minimum years of experience</Text>
			<FilterSlider
				initialValue={yearsExperience}
				sliderProps={sliderProps}
				handleFinalValue={handleYearsExperience}
				handleDisplayValue={handleDisplayValue}
				// sliderProps={yearsExperience}
				// handleChangeValue={handleYearsExperience}
				displayMin={false}
			/>
		</View>
		
	)
}

export default YearsExperience