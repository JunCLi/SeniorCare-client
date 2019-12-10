import React, { useState } from 'react'

import { Text, View, TouchableOpacity } from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import { styles, dynamicStyles } from './styles'

const MenuItem = props => {
	const { title, chevron, slider } = props
	const [ sliderToggle, setSliderToggle ] = useState(false)

	const handleSlider = () => {
		setSliderToggle(!sliderToggle)
	}

	const handleRightIcon = () => {
		if (chevron) {
			return (
				<Icon
					type='entypo'
					name='chevron-right'
					iconStyle={styles.icon}
				/>
			)
		} else if (slider) {
			return (
				<TouchableOpacity
					style={dynamicStyles(sliderToggle).slider}
					onPress={handleSlider}
				>
					<View style={dynamicStyles(sliderToggle).toggleButton}></View>
					{sliderToggle
						? <Text style={dynamicStyles(sliderToggle).sliderText}>ON</Text>
						: <Text style={dynamicStyles(sliderToggle).sliderText}>OFF</Text>
					}
				</TouchableOpacity>
			)
		}

		return null
	}

	return (
		<ListItem
			title={title}
			rightIcon={handleRightIcon()}
			containerStyle={styles.container}
			titleStyle={styles.title}
		/>
	)
}

export default MenuItem