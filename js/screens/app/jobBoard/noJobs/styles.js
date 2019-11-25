import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight, baseFont, margin } from '../../../../styleSettings/screensizeSettings'
import { background, font } from '../../../../styleSettings/colours'
import { fontType } from '../../../../styleSettings/fonts'

const imageWidth = screenWidth / 3
const imageHeight = imageWidth / 125 * 126

export const styles = StyleSheet.create({
	imageContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',

		backgroundColor: background.white,
		borderRadius: screenWidth * 0.6,
		marginVertical: screenHeight / 16, 
		width: screenWidth * 0.6,
		height: screenWidth * 0.6,
	},

	image: {
		width: imageWidth,
		height: imageHeight,
	},

	CTAcontainer: {
		alignItems: 'center',
		alignSelf: 'center',
		width: screenWidth * 0.75,
	},

	CTAmessage: {
		color: font.blue,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.4,
		fontWeight: '500',
		textAlign: 'center',
	},

	button: {
		backgroundColor: background.blue,
		marginVertical: margin.vertical * 3,
		paddingHorizontal: margin.horizontal * 4,
		borderRadius: 30,
	},

	buttonText: {
		color: font.white,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.25,
		fontWeight: '500',
	}
})