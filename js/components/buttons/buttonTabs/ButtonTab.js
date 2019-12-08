import React from 'react'

import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

const ButtonTab = props => {
	const { buttonArray, selectedButton, handleSelectButton } = props

	const sp = {
		buttonNumber: buttonArray.length
	}

	return (
		<View style={styles(sp).buttonContainer}>
			{buttonArray.map(button => (
				<Button
					key={button.value}
					title={button.title}
					onPress={() => handleSelectButton(button.value)}
					buttonStyle={selectedButton === button.value 
						? styles(sp).selectedButtonStyle
						: styles(sp).buttonStyle}
					titleStyle={selectedButton === button.value
						? styles(sp).selectedButtonText
						: styles(sp).buttonText}
				/>
			))}
		</View>
	)
}

export default ButtonTab