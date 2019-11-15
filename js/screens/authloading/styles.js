import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight } from '../../styleSettings/screensizeSettings'

import { generalStyles } from '../../styleSettings/generalStyles'

const logoWidth = screenWidth / 1.8
const logoHeight = 204 / 191 * logoWidth

export const styles = StyleSheet.create({
	background: {
		...generalStyles.background,
	},

	mainContainer: {
		alignSelf: 'center',
	},

	logoContainer: {
		marginTop: screenHeight / 2 - logoHeight,
		width: logoWidth,
		height: logoHeight,
	},

	logo: {
		height: '100%',
		width: '100%',
	},

	// titleContainer: {
	// 	textAlign: 'center',
	// },

	title: {
		textAlign: 'center',
	},

	subTitle: {
		textAlign: 'center',
	},
})