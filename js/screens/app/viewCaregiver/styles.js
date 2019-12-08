import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight, baseFont, margin } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

import { generalStyles, submitButton } from '../../../styleSettings/generalStyles'

export const styles = StyleSheet.create({
	...generalStyles,
	...submitButton,

	avatar: {
		width: screenWidth,
		height: screenWidth * 2 / 3,
	},
})