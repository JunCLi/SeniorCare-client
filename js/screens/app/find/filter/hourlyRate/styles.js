import { StyleSheet } from 'react-native'

import { baseFont, margin } from '../../../../../styleSettings/screensizeSettings'
import { font } from '../../../../../styleSettings/colours'
import { fontType } from '../../../../../styleSettings/fonts'

import { sharedFilterFindStyles } from '../styles'

export const styles = StyleSheet.create({
	...sharedFilterFindStyles, 

	hourlyRateWarning: {
		color: font.grey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 0.75,
		marginBottom: margin.vertical * 1.5,
	},
})