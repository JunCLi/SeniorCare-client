import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { font } from '../../../styleSettings/colours'

export const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: 'white',
		paddingVertical: margin.vertical * 1.2,
		paddingHorizontal: margin.horizontal * 1.25,
	},

	inputDirectContainer: {
		borderBottomWidth: 0,
		paddingTop: 6
	},

	input: {
		...generalStyles.basicFont,
		color: font.black,
	},

	placeholder: {
		color: font.dullGrey,
	},

	inputIcon: {
		fontSize: baseFont * 1.2,
		color: font.lightBlue,
		marginBottom: 4,
	}
})