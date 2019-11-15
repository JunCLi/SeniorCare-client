import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight } from '../../styleSettings/screensizeSettings'

import { generalStyles } from '../../styleSettings/generalStyles'

const logoWidth = screenWidth / 1.8
const logoHeight = 204 / 191 * logoWidth

const logoTextWidth = screenWidth / 1.5
const logoTextHeight = 59 / 250 * logoTextWidth

const text = {
	textAlign: 'center',
	fontFamily: 'SFProText-Medium',
}

export const styles = StyleSheet.create({
	background: {
		...generalStyles.background,
	},

	logoContainer: {
		alignSelf: 'center',
		marginTop: screenHeight / 2 - logoHeight,
		width: logoWidth,
		height: logoHeight,
	},

	logo: {
		height: '100%',
		width: '100%',
	},

	placeholderLogo: {
		backgroundColor: 'transparent',
	},

	logoTextContainer: {
		alignSelf: 'center',
		marginTop: screenHeight / 24,
		width: logoTextWidth,
		height: logoTextHeight,
	},

	logoText: {
		width: '100%',
		height: '100%',
	},
})