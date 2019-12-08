import { StyleSheet } from 'react-native'

import { generalStyles } from '../../styleSettings/generalStyles'

import { margin, baseFont, screenWidth } from '../../styleSettings/screensizeSettings'
import { background, font } from '../../styleSettings/colours'

export const sharedStyles = StyleSheet.create({
	mainContainer: {
		marginHorizontal: margin.horizontal,
		marginVertical: margin.vertical,
		marginBottom: margin.vertical * 2,
	},

	headerContainer: {
		...generalStyles.flexRowCenter,
		justifyContent: 'space-between',
		backgroundColor: background.blueGrey,
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical,
	},

	headerText: {
		...generalStyles.weightedBasicFont,
		color: font.dullGrey,
		fontSize: baseFont * 1.25,
	},

	chevronIcon: {
		color: font.dullGrey,
		marginRight: margin.horizontal,
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