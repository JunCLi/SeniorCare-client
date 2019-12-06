import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { font } from '../../../styleSettings/colours'

export const styles = StyleSheet.create({
	title: {
		...generalStyles.basicFontBolder,
		fontSize: baseFont * 1.4,
	},

	subtitle: {
		...generalStyles.basicFont,
		color: font.dullGrey,
	},

	container: {
		borderBottomWidth: 1,
		borderBottomColor: font.grey,
	}
})

export const icon = {
	color: font.grey,
}