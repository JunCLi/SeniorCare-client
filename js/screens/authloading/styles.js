import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight } from '../../styleSettings/screensizeSettings'
import { backgroundColours } from '../../styleSettings/colours'

import { generalStyles } from '../../styleSettings/generalStyles'

const logoWidth = screenWidth / 1.8
const logoHeight = 204 / 191 * logoWidth

const logoTextWidth = screenWidth / 1.5
const logoTextHeight = 59 / 250 * logoTextWidth

export const styles = StyleSheet.create({
	background: {
		backgroundColor: backgroundColours.white,
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
		...generalStyles.transparentPlaceholder,
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