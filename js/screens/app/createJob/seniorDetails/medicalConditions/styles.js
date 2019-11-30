import { StyleSheet } from 'react-native'

import { screenHeight, margin, baseFont } from '../../../../../styleSettings/screensizeSettings'
import { background } from '../../../../../styleSettings/colours'

import { sharedStyles } from '../../sharedStyles'

export const styles = StyleSheet.create({
	...sharedStyles,

	input: {
		...sharedStyles.input,
		fontSize: baseFont * 1.25,
		height: screenHeight / 2,
	},

	inputContainer: {
		...sharedStyles.inputContainer,
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical,
		backgroundColor: background.white,
	},

	innerInputContainer: {
		borderBottomWidth: 0,
	}
})