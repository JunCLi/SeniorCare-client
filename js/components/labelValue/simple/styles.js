import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { margin, baseFont, screenWidth } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'

export const styles = StyleSheet.create({
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
	}
})