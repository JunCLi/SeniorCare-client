import { StyleSheet } from 'react-native'

import { baseFont } from '../../../../../styleSettings/screensizeSettings'
import { font } from '../../../../../styleSettings/colours'
import { fontType } from '../../../../../styleSettings/fonts'

import { sharedStyles } from '../../sharedStyles'

export const styles = StyleSheet.create({
	...sharedStyles,

	questionSubheeader: {
		color: font.blue,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 0.8,
	},

	label: {
		color: font.black,
		fontFamily: fontType.sfpro,
		fontSize: baseFont,
		fontWeight: '400',
	}
})