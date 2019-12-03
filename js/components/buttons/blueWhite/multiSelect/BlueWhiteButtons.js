import React from 'react'

import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles, dynamicStyles } from './styles'

const BlueWhiteButtons = props => {
	const { buttonArray, selected, handleSelect } = props

	const handleIsSelected = value => {
		const hasSelected = selected.filter(item => item === value).length
		return hasSelected ? true : false
	}

	const handleButtonStyle = value => (
		handleIsSelected(value) ? styles.selectedButton : styles.button
	)

	const handleTitleStyle = (title, value) => {
		const cutoff = 11
		if (title.length > cutoff) {
			return handleIsSelected(value)
				? dynamicStyles(title.length - cutoff).selectedButtonTitle
				: dynamicStyles(title.length - cutoff).buttonTitle
		} else {
			return handleIsSelected(value)
				? styles.selectedButtonTitle
				: styles.buttonTitle
		}
	}

	handleDisplayIcon = button => {
		if (button.icon) {
			if (button.selectedIcon) {
				return handleIsSelected(button.value) ? button.selectedIcon : button.icon
			} else {
				return button.icon
			}
		} else {
			return false
		}
	}

	return (
		<View style={styles.buttonsViewContainer}>
			{buttonArray.map(button => (
				<Button
					key={button.value}
					title={button.title}
					icon={handleDisplayIcon(button)}
					iconContainerStyle={styles.iconContainer}
					containerStyle={styles.buttonsContainer}
					buttonStyle={handleButtonStyle(button.value)}
					titleStyle={handleTitleStyle(button.title, button.value)}
					onPress={() => handleSelect(button.value)}
				/>
			))}
		</View>
	)
}

export default BlueWhiteButtons