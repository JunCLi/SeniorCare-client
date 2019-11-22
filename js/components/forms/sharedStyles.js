import { StyleSheet } from 'react-native'

import { screenHeight, screenWidth, margin, baseFont } from '../../styleSettings/screensizeSettings'
import { background, font } from '../../styleSettings/colours'
import { fontType } from '../../styleSettings/fonts' 

// import { generalStyles } from '../../../styleSettings/generalStyles'

const inputFont = StyleSheet.create({
	inputFont: {
		fontFamily: fontType.sfpro,
		fontSize: baseFont,
		fontWeight: 'normal',
	}
})

export const sharedStyles = StyleSheet.create({
	formContainer: {
		marginTop: screenHeight / 16,
		marginHorizontal: margin.horizontal * 1.5,
		backgroundColor: background.translucentWhite,
	},

	inputViewContainer: {
		marginBottom: margin.vertical, 
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical,
	},

	placeholderTextColor: {
		...inputFont.inputFont,
		color: font.grey,
	},
	
	label: {
		...inputFont.inputFont,
		color: font.blue,
	},
	
	input: {
		...inputFont.inputFont,
		color: font.darkerGrey,
	},
})