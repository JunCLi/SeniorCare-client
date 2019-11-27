import { StyleSheet } from 'react-native'

import { screenWidth, margin } from '../../../../styleSettings/screensizeSettings'
import { font, background } from '../../../../styleSettings/colours'
import { fontType } from '../../../../styleSettings/fonts'

import { generalStyles } from '../../../../styleSettings/generalStyles'

const sharedButtonStyles = StyleSheet.create({
	button: {
		borderRadius: 0,
		paddingVertical: margin.vertical * 1.5,
		width: screenWidth / 2,
	},

	text: {
		fontFamily: fontType.sfpro,
		fontWeight: '600',
	},
})

export const styles = StyleSheet.create({
	mainContainer: {
		...generalStyles.flexRowCenter
	},

	back: {
		...sharedButtonStyles.button,
		backgroundColor: background.lightGrey
	},

	backTitle: {
		...sharedButtonStyles.text,
		color: font.black
	},

	next: {
		...sharedButtonStyles.button,
		backgroundColor: background.blue
	},

	nextTitle: {
		...sharedButtonStyles.text,
	}
})