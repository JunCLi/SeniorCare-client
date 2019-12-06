import { StyleSheet } from 'react-native'

import { margin, baseFont, screenWidth } from '../../../../styleSettings/screensizeSettings'
import { background, font } from '../../../../styleSettings/colours'
import { fontType } from '../../../../styleSettings/fonts'

import { sharedStyles } from '../sharedStyles'

export const styles = StyleSheet.create({
	...sharedStyles,

	buttonsContainer: {
		...sharedStyles.buttonsContainer,
		width: '100%',

	}
})