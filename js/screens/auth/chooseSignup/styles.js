import { StyleSheet } from 'react-native'

import { screenHeight, screenWidth, baseFont, margin } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

import { generalStyles } from '../../../styleSettings/generalStyles'


const welcomeWidth = screenWidth * 4 / 5
const welcomeHeight = welcomeWidth / (799/3) * (269/3)

const familyImageWidth = screenWidth / 5.25
const familyImageHeight = familyImageWidth * 70.05 / 79

const caregiverImageWidth = screenWidth / 4.75
const caregiverImageHeight = caregiverImageWidth / 77.24 * 47.03

const intro = StyleSheet.create({
	introContainer: {
		marginTop: screenHeight / 16,
		marginHorizontal: margin.horizontal * 2,
	},

	welcomeContainer: {
		marginVertical: margin.vertical * 2,
	},

	welcome: {
		width: welcomeWidth,
		height: welcomeHeight,
	},

	descriptionContainer: {
		marginVertical: margin.vertical * 2,
	},

	description: {
		color: font.blue,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.1,
	},
})

const choices = StyleSheet.create({
	choicesOuterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: margin.horizontal * 1.5,
		marginVertical: margin.vertical * 2,
	},

	choicesInnerContainer: {
		alignItems: 'center',
	},

	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: screenWidth / 3.25,
		marginVertical: margin.vertical,
		width: screenWidth / 3.25,
		height: screenWidth / 3.25,
	},

	familyImage: {
		width: familyImageWidth,
		height: familyImageHeight,
	},

	caregiversImage: {
		width: caregiverImageWidth,
		height: caregiverImageHeight,
	},

	choiceButton: {
		backgroundColor: background.white,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: background.blue,
		marginVertical: margin.vertical,
		width: screenWidth / 2.4,
	},

	choiceButtonText: {
		color: font.blue,
		fontFamily: fontType.sfpro,
		fontSize: baseFont,
	},

	choiceDescriptionContainer: {
		width: screenWidth / 3,
	},	

	choiceDescription: {
		color: font.blue,
		fontFamily: fontType.sfpro,
		fontSize: baseFont,
		textAlign: 'center',
	},
})

export const styles = StyleSheet.create({
	...generalStyles,
	...intro,
	...choices,

	background: {
		...generalStyles.background,
		backgroundColor: background.blueGrey,
	}
})