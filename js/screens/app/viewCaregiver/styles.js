import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight, baseFont, margin } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

import { generalStyles, submitButton } from '../../../styleSettings/generalStyles'


const sharedButtonStyles = StyleSheet.create({
	button: {
		backgroundColor: background.blueGrey,
		width: screenWidth / 3,
		paddingVertical: margin.vertical * 1.25,
	},

	text: {
		color: font.lightGrey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont,
	}
})

export const styles = StyleSheet.create({
	...generalStyles,
	...submitButton,

	avatar: {
		width: screenWidth,
		height: screenWidth * 2 / 3,
	},

	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},

	buttonStyle: {
		...sharedButtonStyles.button,
	},

	selectedButtonStyle: {
		...sharedButtonStyles.button,
		borderBottomColor: background.blue,
		borderBottomWidth: 1,
	},

	buttonText: {
		...sharedButtonStyles.text,
	},

	selectedButtonText: {
		...sharedButtonStyles.text,
		color: font.blue,
	},


})