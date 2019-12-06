import React from 'react'

import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

const BlueWhiteButtons = props => {
	const { buttonArray, selected, handleSelect } = props

	const handleButtonStyle = () => {
		if (selected) {
			return selected === button.value ? styles.selectedButton : styles.button
		} else {
			return styles.button
		}
	}

	const handleTitleStyle = () => {
		if (selected) {
			return selected === button.value ? styles.selectedButtonTitle : styles.buttonTitle
		} else {
			return styles.buttonTitle
		}
	}

	return (
		<View style={styles.buttonsViewContainer}>
			{buttonArray.map(button => (
				<Button
					key={button.value}
					title={button.title}
					containerStyle={styles.buttonsContainer}
					buttonStyle={handleButtonStyle()}
					titleStyle={handleTitleStyle()}
					onPress={() => handleSelect(button.value)}
				/>
			))}
		</View>
	)
}

export default BlueWhiteButtons