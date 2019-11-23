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

const buttonStyles = StyleSheet.create({
	buttonsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},

	button: {
		backgroundColor: background.white,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: font.blue,
		marginVertical: margin.vertical,
		paddingVertical: margin.vertical * 1.2,
		width: screenWidth / 2 - margin.horizontal * 1.5,
	},

	buttonTitle: {
		color: font.blue,
		fontFamily: fontType.sfpro,
	}
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
	...buttonStyles,
	...clearAll,
	...sharedFilterFindStyles,

	mainContainer: {
		...generalStyles.mainContainer,
		marginHorizontal: margin.horizontal,
		paddingVertical: margin.vertical * 2,
	},
})