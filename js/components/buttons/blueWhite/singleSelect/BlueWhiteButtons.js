import React from 'react'

import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

const BlueWhiteButtons = props => {
	const { buttonArray, selected, handleSelect } = props

	return (
		<View style={styles.buttonsViewContainer}>
			{buttonArray.map(button => (
				<Button
					key={button.value}
					title={button.title}
					containerStyle={styles.buttonsContainer}
					buttonStyle={selected === button.value ? styles.selectedButton : styles.button}
					titleStyle={selected === button.value ? styles.selectedButtonTitle : styles.buttonTitle}
					onPress={() => handleSelect(button.value)}
				/>
			))}
		</View>
	)
}

export default BlueWhiteButtons