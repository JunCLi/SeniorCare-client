import { StyleSheet } from 'react-native'

import { margin, baseFont, screenWidth } from '../../../../styleSettings/screensizeSettings'
import { background, font } from '../../../../styleSettings/colours'
import { fontType } from '../../../../styleSettings/fonts'

import { generalStyles, submitButton } from '../../../../styleSettings/generalStyles'

const clearAll = StyleSheet.create({
	clearAllButton: {
		backgroundColor: 'transparent',
		width: screenWidth / 4,
	},

	clearAllTitle: {
		color: font.lightBlue,
		fontFamily: fontType.sfpro,
	},
})

export const sharedFilterFindStyles = StyleSheet.create({
	optionsContainer: {
		marginTop: margin.vertical * 2,
		marginBottom: margin.vertical * 1.5,
	},

	title: {
		color: font.blue,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.1,
		fontWeight: '500',
	},
})

export const styles = StyleSheet.create({
	...generalStyles,
	...submitButton,
	...clearAll,
	...sharedFilterFindStyles,

	mainContainer: {
		...generalStyles.mainContainer,
		marginHorizontal: margin.horizontal,
		paddingVertical: margin.vertical * 2,
	},
})