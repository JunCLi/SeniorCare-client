import React from 'react'

import { View, Text } from 'react-native'
import { Slider } from 'react-native-elements'
import { styles, dynamicStyles } from './styles'

const FilterSlider = props => {
	const { sliderProps, handleOnChange, handleDisplayValue, displayMin = false } = props

	return (
		<View style={styles.sliderContainer}>
			<View style={dynamicStyles(sliderProps).sliderValueContainer}>
				<Text style={styles.sliderValue}>
					{handleDisplayValue(sliderProps.value)}
				</Text>
			</View>
			<Slider
				value={sliderProps.value}
				onValueChange={value => handleOnChange(value)}
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