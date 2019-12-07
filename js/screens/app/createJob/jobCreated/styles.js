import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../../styleSettings/generalStyles'

import { background, font } from '../../../../styleSettings/colours'
import { screenHeight, screenWidth, baseFont, margin } from '../../../../styleSettings/screensizeSettings'
import { fontType } from '../../../../styleSettings/fonts'

const imageWidth = screenWidth * .4
const imageHeight = imageWidth * 145.75 / 146.52

export const styles = StyleSheet.create({
	...generalStyles,

	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',

		backgroundColor: background.white,
		borderRadius: screenWidth * .6,
		marginTop: screenHeight / 8,
		width: screenWidth * .6,
		height: screenWidth * .6,

		shadowColor: font.black,
		shadowOffset: {
			width: 1,
			height: 2,
		},
		shadowRadius: 2,
		shadowOpacity: 0.4,
	},

	image: {
		width: imageWidth,
		height: imageHeight,
	},

	title: {
		color: font.blue,
		fontFamily: fontType.gothamBold,
		fontSize: baseFont * 1.8,
		marginTop: screenHeight / 16,
		textAlign: 'center',
		textTransform: 'uppercase',
	},

	descriptionContainer: {
		marginHorizontal: margin.horizontal * 4,
		marginTop: margin.vertical * 3,
		marginBottom: margin.vertical,
	},

	description: {
		...generalStyles.basicFont,
		color: font.blue,
		lineHeight: baseFont * 1.75,
		textAlign: 'center',
	},

	button: {
		alignSelf: 'center',
		backgroundColor: font.blue,
		borderRadius: 30,
		marginVertical: margin.vertical * 2,
		paddingHorizontal: margin.horizontal * 4,
		paddingVertical: margin.vertical * 1.25,
	},

	buttonText: {
		...generalStyles.basicFont,
		color: font.white,
		fontSize: baseFont * 1.1,
	}
})