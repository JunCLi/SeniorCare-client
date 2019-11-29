import { StyleSheet } from 'react-native'

import { margin, baseFont, screenWidth } from '../../../../styleSettings/screensizeSettings'
import { background, font } from '../../../../styleSettings/colours'
import { fontType } from '../../../../styleSettings/fonts'

import { sharedStyles } from '../sharedStyles'

export const styles = StyleSheet.create({
	...sharedStyles,

	// // buttonsContainer: {
	// // 	width: '40%',
	// // },

	// button: {
	// 	...sharedStyles.button,
	// 	// width: screenWidth / 2 - margin.horizontal * 2
	// },

	// selectedButton: {
	// 	...sharedStyles.button,
	// 	// width: screenWidth / 2 - margin.horizontal * 2
	// }
})