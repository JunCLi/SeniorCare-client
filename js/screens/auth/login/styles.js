import { StyleSheet } from 'react-native'

import { screenHeight, screenWidth, baseFont, margin } from '../../../styleSettings/screensizeSettings'
import { font, background } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

import { generalStyles } from '../../../styleSettings/generalStyles'

export const styles = StyleSheet.create({
	...generalStyles,

	introContainer: {
		marginTop: screenHeight / 16,
		marginHorizontal: margin.horizontal * 1.5,
	},

	introText: {
		color: font.blue,
		fontFamily: fontType.gothamBold,
		fontSize: baseFont * 2,
		borderRadius: 0,
	},

	forgetPasswordContainer: {

	},

	button: {
		backgroundColor: 'transparent',
		width: screenWidth / 3,
	},

	buttonText: {
		color: font.lightBlue,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 0.9,
	}
})