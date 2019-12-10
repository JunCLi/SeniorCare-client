import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../../styleSettings/generalStyles'
import { margin, baseFont } from '../../../../styleSettings/screensizeSettings'
import { font, background } from '../../../../styleSettings/colours'

export const styles = StyleSheet.create({
	...generalStyles,

	detailsContainer: {
		...generalStyles.detailsContainer,
		marginLeft: margin.horizontal * 0.5,
		marginVertical: margin.vertical * 0.5,
	},

	logoutButton: {
		backgroundColor: background.white,
		paddingVertical: margin.vertical * 2,
	},

	logoutText: {
		...generalStyles.basicFontBolder,
		color: font.dullGrey,
		fontSize: baseFont * 1.25,
	},
})