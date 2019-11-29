import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import FilterSlider from '../../../../../components/sliders/filterSlider/FilterSlider'

const HourlyRate = props => {
	const { values, setFieldValue } = props.formikProps

	const sliderProps = {
		max: 75,
		min: 14,
	}

	const handleHourlyRate = value => {
		setFieldValue('hourlyRate', Math.round(value) )
	}

	const handleDisplayValue = value => {
		return `$${Math.round(value)}`
	}

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>What will the hourly rate be?</Text>
				<Text style={styles.questionSubheader}>*Minimum wage varies per province/territory in Canada</Text>
			</View>
			<FilterSlider
				initialValue={values.hourlyRate}
				sliderProps={sliderProps}
				handleFinalValue={handleHourlyRate}
				handleDisplayValue={handleDisplayValue}
				displayMin={true}
			/>
		</View>
	)
}

export default HourlyRate