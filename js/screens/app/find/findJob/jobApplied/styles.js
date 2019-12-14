import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../../../styleSettings/generalStyles'

import { screenWidth, screenHeight, baseFont, margin } from '../../../../../styleSettings/screensizeSettings'
import { background, font } from '../../../../../styleSettings/colours'

const imageWidth = screenWidth / 3
const imageHeight = imageWidth / 138 * 121

export const styles = StyleSheet.create({
	...generalStyles,

	imageContainer: {
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		backgroundColor: background.white,
		borderRadius: screenWidth / 2,
		marginTop: screenHeight / 6,
		width: screenWidth / 2,
		height: screenWidth / 2,
	},

	image: {
		width: imageWidth,
		height: imageHeight,
	},

	text: {
		...generalStyles.basicFontBolder,
		alignSelf: 'center',
		color: font.blue,
		fontSize: baseFont * 1.15,
		marginVertical: screenHeight / 24,
		textAlign: 'center',
		width: screenWidth * 0.7,
	},

	button: {
		alignSelf: 'center',
		backgroundColor: background.blue,
		borderRadius: 30,
		paddingVertical: margin.vertical,
		width: screenWidth / 2,
	},

	buttonText: {
		...generalStyles.basicFontBolder,
		color: font.white,
		fontWeight: '600',
	}
})