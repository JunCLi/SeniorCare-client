import React, { useState } from 'react'

import { View, Text } from 'react-native'
import { styles } from './styles'

import FilterSlider from '../../../../../components/sliders/filterSlider/FilterSlider'

const YearsExperience = props => {
	const [ yearsExperience, setYearsExperience ] = useState({
		value: 5,
		max: 20,
		min: 0,
	})

	const handleYearsExperience = value => {
		setYearsExperience({
			...yearsExperience,
			value: value,
		})
	}

	const handleDisplayValue = value => {
		return `${Math.round(value)}`
	}

	return (
		<View style={styles.optionsContainer}>
			<Text style={styles.title}>Minimum years of experience</Text>
			<FilterSlider
				sliderProps={yearsExperience}
				handleOnChange={handleYearsExperience}
				handleDisplayValue={handleDisplayValue}
				displayMin={false}
			/>
		</View>
		
	)
}

export default YearsExperience