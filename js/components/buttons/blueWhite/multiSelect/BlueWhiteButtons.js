import React from 'react'

import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

const BlueWhiteButtons = props => {
	const { buttonArray, selected, handleSelect } = props

	const handleIsSelected = value => {
		const hasSelected = selected.filter(item => item === value).length
		return hasSelected ? true : false
	}

	return (
		<View style={styles.buttonsViewContainer}>
			{buttonArray.map(button => (
				<Button
					key={button.value}
					title={button.title}
					containerStyle={styles.buttonsContainer}
					buttonStyle={handleIsSelected(button.value) ? styles.selectedButton : styles.button}
					titleStyle={handleIsSelected(button.value) ? styles.selectedButtonTitle : styles.buttonTitle}
					onPress={() => handleSelect(button.value)}
				/>
			))}
		</View>
	)
}

export default BlueWhiteButtons