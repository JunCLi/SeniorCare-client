import { StyleSheet } from 'react-native'

import { margin, baseFont, screenHeight, screenWidth } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

import { generalStyles, submitButton } from '../../../styleSettings/generalStyles'

const fontStyles = StyleSheet.create({
	question: {
		color: font.blue,
		fontFamily: fontType.gotham,
		fontSize: baseFont * 1.25,
		fontWeight: '500',
	},

	input: {
		color: font.darkerGrey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.4,
	},
})

export const sharedStyles = StyleSheet.create({
	questionContainer: {
		marginVertical: margin.vertical * 1.5,
	},

	question: {
		...fontStyles.question
	},

	questionSubheader: {
		color: font.blue,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 0.7,
	},

	inputViewContainer: {
		marginTop: margin.vertical * 1.5,
		marginBottom: margin.vertical * 3,
	},

	inputContainer: {
		paddingHorizontal: 0,
	},

	input: {
		...fontStyles.input,
	},

	iconContainer: {
		position: 'absolute',
		left: margin.horizontal * 1.25,
	},

	icon: {
		width: 20,
		height: 20
	},

	placeholderIcon: {
		backgroundColor: 'transparent',
	}
})