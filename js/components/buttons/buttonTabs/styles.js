import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { screenWidth, screenHeight, baseFont, margin } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

const sharedButtonStyles = StyleSheet.create({
	button: {
		borderRadius: 0,
		backgroundColor: background.blueGrey,
		paddingVertical: margin.vertical * 1.25,
	},

	text: {
		color: font.lightGrey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont,
	}
})

export const styles = props => {
	return StyleSheet.create({
		...generalStyles,

		buttonContainer: {
			flexDirection: 'row',
			alignItems: 'center',
		},
	
		buttonStyle: {
			...sharedButtonStyles.button,
			width: screenWidth / props.buttonNumber,
		},
	
		selectedButtonStyle: {
			...sharedButtonStyles.button,
			width: screenWidth / props.buttonNumber,
			borderBottomColor: background.blue,
			borderBottomWidth: 2,
		},
	
		buttonText: {
			...sharedButtonStyles.text,
		},
	
		selectedButtonText: {
			...sharedButtonStyles.text,
			color: font.blue,
		},
	})
}
