import { StyleSheet } from 'react-native'

import { sharedStyles } from '../../sharedStyles'
import { generalStyles } from '../../../../../styleSettings/generalStyles'

import { font, background } from '../../../../../styleSettings/colours'
import { baseFont, margin, screenWidth, screenHeight } from '../../../../../styleSettings/screensizeSettings'
import { fontType } from '../../../../../styleSettings/fonts'

export const styles = StyleSheet.create({
	...sharedStyles,

	selectedLanguageContainer: {
		...generalStyles.flexRowCenter,
		justifyContent: 'space-between',
		backgroundColor: background.white,
		marginBottom: margin.vertical,
		paddingHorizontal: margin.horizontal * 0.5,
		paddingVertical: margin.horizontal * 0.5,
	},

	selectedLanguage: {
		color: font.darkerGrey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.5,
		fontWeight: '500',
	},

	removeButton: {
		backgroundColor: 'transparent',
		paddingVertical: margin.vertical * 0.5,
	},

	removeButtonText: {
		color: font.red,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 0.75,
	},


	addLanguagesButton: {
		...generalStyles.flexRowCenter,
		marginTop: margin.vertical * 1.5,
		justifyContent: 'center',
	},

	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: background.darkerBlueGrey,
		borderRadius: 100,
		marginRight: margin.horizontal * .75,
		paddingLeft: 1,
		paddingTop: 2,
		width: baseFont * 2.5,
		height: baseFont * 2.5,
	},

	icon: {
		color: font.blue,
		fontSize: baseFont * 1.5,
	},

	addLanguagesText: {
		color: font.blue,
		fontSize: baseFont * 1.5,
	},

	inputContainer: {
		...sharedStyles.inputContainer,
		marginVertical: margin.vertical,
	},
})