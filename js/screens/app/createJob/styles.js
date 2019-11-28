import { StyleSheet } from 'react-native'

import { margin, baseFont, screenHeight, screenWidth } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

import { generalStyles, submitButton } from '../../../styleSettings/generalStyles'

export const styles = StyleSheet.create({
	...generalStyles,
	...submitButton,

	introContainer: {
		marginHorizontal: margin.horizontal * 1.5,
		marginTop: screenHeight / 20,
	},

	title: {
		color: font.black,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.4,
		fontWeight: 'bold',
	},

	description: {
		color: font.dullGrey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont,
		lineHeight: baseFont * 1.6,
		marginVertical: screenHeight / 28,
		paddingRight: margin.horizontal * 2,
	},

	stepContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: font.grey,
		borderBottomWidth: 1,
		paddingVertical: margin.vertical * 1.5,
		paddingLeft: screenWidth / 8,
	},

	stepNumber: {
		color: font.white,
	},

	stepNumberCircle: {
		backgroundColor: background.yellow
	},

	stepCompletedCircle: {
		backgroundColor: background.blue
	},

	stepText: {
		color: font.black,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.25,
		paddingLeft: margin.horizontal * 2,
	},

	nextSectionTitle: {
		color: font.white,
		fontFamily: fontType.sfpro,
		fontWeight: '500',
	},
})