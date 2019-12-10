import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { margin, baseFont, screenWidth } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'

export const styles = StyleSheet.create({
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
})