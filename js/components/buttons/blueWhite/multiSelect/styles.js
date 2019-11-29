import { StyleSheet } from 'react-native'

import { margin, baseFont, screenWidth } from '../../../../styleSettings/screensizeSettings'
import { background, font } from '../../../../styleSettings/colours'
import { fontType } from '../../../../styleSettings/fonts'

import { sharedStyles } from '../sharedStyles'

export const dynamicStyles = charOverCutoff => StyleSheet.create({
	...sharedStyles,
	buttonTitle: {
		...sharedStyles.buttonTitle,
		fontSize: baseFont * 0.95,
		marginLeft: charOverCutoff * baseFont * 0.75,
	},

	selectedButtonTitle: {
		...sharedStyles.selectedButtonTitle,
		fontSize: baseFont * 0.95,
		marginLeft: charOverCutoff * baseFont * 0.75,
	}
})

export const styles = StyleSheet.create({
	...sharedStyles,

	buttonTitle: {
		...sharedStyles.buttonTitle,
		fontSize: baseFont * 0.95
	},

	selectedButtonTitle: {
		...sharedStyles.selectedButtonTitle,
		fontSize: baseFont * 0.95
	}
})