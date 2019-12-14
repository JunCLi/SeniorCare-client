import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { background, font } from '../../../styleSettings/colours'
import { screenHeight, screenWidth, margin, baseFont } from '../../../styleSettings/screensizeSettings'

export const dynamicStyles = keyboardMargin => StyleSheet.create({
	modalContainer: {
		backgroundColor: background.modalGrey,
		alignSelf: 'center',
		marginTop: keyboardMargin ? keyboardMargin : 0,
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical,
		width: screenWidth * 0.85,
		height: screenHeight * 0.45,
		minHeight: 400,
	},
})

export const styles = StyleSheet.create({
	...generalStyles,

	iconContainer: {
		alignSelf: 'flex-start',
	},
	
	closeIcon: {
		color: font.lightBlue,
	},

	title: {
		...generalStyles.basicFontBolder,
		fontSize: baseFont * 1.25,
		marginTop: -margin.vertical * 0.5,
		textAlign: 'center',
	},

	description: {
		...generalStyles.description,
		color: font.dullGrey,
		fontSize: baseFont * 0.75,
		marginHorizontal: margin.horizontal * 2.5,
		marginVertical: margin.vertical * 1.25,
	},

	input: {
		...generalStyles.basicFont,
		height: '100%',
	},

	inputContainer: {
		flex: 1,
		backgroundColor: background.white,
	},

	inputDirectContainer: {
		height: '100%',
		borderBottomWidth: 0,
	},

	button: {
		alignSelf: 'center',
		backgroundColor: background.blue,
		borderRadius: 30,
		marginTop: margin.vertical * 2.5,
		marginBottom: margin.vertical * 0.75,
		paddingHorizontal: margin.horizontal * 5,
		paddingVertical: margin.vertical * 0.5,
	},

	buttonText: {
		...generalStyles.basicFontBolder,
		color: font.white
	},
})

