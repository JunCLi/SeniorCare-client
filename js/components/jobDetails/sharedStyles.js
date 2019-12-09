import { StyleSheet } from 'react-native'

import { generalStyles } from '../../styleSettings/generalStyles'

import { margin, baseFont, screenWidth } from '../../styleSettings/screensizeSettings'
import { background, font } from '../../styleSettings/colours'

export const sharedStyles = StyleSheet.create({
	mainContainer: {
		backgroundColor: background.white,
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical,
		paddingBottom: margin.vertical * 2,
	},

	labelValueContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginVertical: margin.vertical * 0.75,
	},

	labelContainer: {
		width: screenWidth / 2 - margin.horizontal,
	},

	label: {
		...generalStyles.basicFont,
		color: font.darkerGrey,
		fontWeight: '600',
		lineHeight: baseFont * 1.5,
	},

	valueContainer: {
		marginHorizontal: margin.horizontal,
	},

	value: {
		...generalStyles.basicFont,
		color: font.dullGrey,
		lineHeight: baseFont * 1.5,
	},

	capitalizeValue: {
		...generalStyles.basicFont,
		color: font.dullGrey,
		lineHeight: baseFont * 1.5,
		textTransform: 'capitalize',
	},
})