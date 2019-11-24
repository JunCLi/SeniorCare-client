import React, { useState, useEffect } from 'react'

import { View, Text } from 'react-native'
import { Slider } from 'react-native-elements'
import { styles, dynamicStyles } from './styles'

const FilterSlider = props => {
	const {
		initialValue, 
		sliderProps,
		handleFinalValue,
		handleDisplayValue,
		displayMin = false
	} = props

	const [ value, setValue ] = useState(initialValue)

	const handleSliderValue = sliderValue => {
		setValue(sliderValue)
	}

	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])

	return (
		<View style={styles.sliderContainer}>
			<View style={dynamicStyles(sliderProps, value).sliderValueContainer}>
				<Text style={styles.sliderValue}>
					{handleDisplayValue(value)}
				</Text>
			</View>
			<Slider
				value={value}
				onValueChange={sliderValue => handleSliderValue(sliderValue)}
				onSlidingComplete={() => handleFinalValue(value)}
				maximumValue={sliderProps.max}
				minimumValue={sliderProps.min}
				style={styles.slider}
				thumbStyle={styles.thumbStyle}
				trackStyle={styles.trackStyle}
				minimumTrackTintColor='#244492'
			/>
			{displayMin && <Text style={styles.minValue}>${sliderProps.min}</Text>}
		</View>
	)
}

export default FilterSlider