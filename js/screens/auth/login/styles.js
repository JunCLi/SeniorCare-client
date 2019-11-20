import { StyleSheet } from 'react-native'

import { screenHeight, screenWidth, baseFont, margin } from '../../../styleSettings/screensizeSettings'
import { font, background } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

import { generalStyles, submitButton } from '../../../styleSettings/generalStyles'

export const styles = StyleSheet.create({
	...generalStyles,
	...submitButton,

	forgetPasswordContainer: {
		marginVertical: margin.vertical,
		marginHorizontal: margin.horizontal * 1.5,
		alignItems: 'center',
	},

	forgotButton: {
		backgroundColor: 'transparent',
		width: screenWidth / 3,
	},

	forgotButtonText: {
		color: font.lightBlue,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 0.9,
	}
})