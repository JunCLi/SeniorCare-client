import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { background, font } from '../../../styleSettings/colours'
import { margin } from '../../../styleSettings/screensizeSettings'

export const styles = StyleSheet.create({
	...generalStyles,

	searchContainer: {
		backgroundColor: background.white,
		borderRadius: 20,
		marginHorizontal: margin.horizontal * 1.5,
		marginVertical: margin.vertical * 2,
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical,
	},

	searchText: {
		...generalStyles.basicFont,
		color: font.dullGrey,
	}
})