import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { margin } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'

export const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: background.blueGrey,
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical * 1.25,
	},

	headerText: {
		...generalStyles.basicFontBolder,
		color: font.dullGrey,
	},
})