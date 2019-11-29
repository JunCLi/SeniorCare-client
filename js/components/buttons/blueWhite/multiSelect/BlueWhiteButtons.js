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
		console.log('title length', title.length)
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

	return (
		<View style={styles.buttonsViewContainer}>
			{buttonArray.map(button => (
				<Button
					key={button.value}
					title={button.title}
					icon={button.icon}
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