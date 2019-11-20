import { StyleSheet } from 'react-native'

import { screenHeight, ScreenWidth, margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
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

	messageContainer: {
		marginTop: screenHeight / 16,
		marginHorizontal: margin.horizontal * 1.5,
	},

	message: {
		color: font.blue,
		fontSize: baseFont,
	},
})