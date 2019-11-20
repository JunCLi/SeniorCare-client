import { StyleSheet } from 'react-native'

import { screenHeight, margin, baseFont } from './screensizeSettings'
import { background, font } from './colours'
import { fontType } from './fonts'

export const generalStyles = StyleSheet.create({
	background: {
		backgroundColor: background.white,
		flex: 1,
	},

	backgroundBlue: {
		backgroundColor: background.blueGrey,
		flex: 1,
	},
	
	statusBar: {
		backgroundColor: background.grey,
	},

	scrollViewFix: {
		flexGrow: 1,
	},
	
	avoidKeyboard: {
		flex: 1, 
	},

	keyboardOffset: {
		margin: screenHeight / 10 - 2,
	},

	mainContainer: {
		flex: 1,
	},

	transparentPlaceholder: {
		backgroundColor: 'transparent'
	},

	introContainer: {
		marginTop: screenHeight / 16,
		marginHorizontal: margin.horizontal * 1.5,
	},

	introText: {
		color: font.blue,
		fontFamily: fontType.gothamBold,
		fontSize: baseFont * 2,
		borderRadius: 0,
	},
})

export const submitButton = StyleSheet.create({
	submitButton: {
		backgroundColor: background.blue,
		paddingVertical: margin.vertical * 1.5, 
		borderRadius: 0,
	},

	submitDisabled: {
		backgroundColor: background.disabledGrey,
	},

	submitDisabledText: {
		color: font.white,
	},
})