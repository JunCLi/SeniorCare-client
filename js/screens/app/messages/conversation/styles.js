import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../../styleSettings/generalStyles'

import { margin, baseFont } from '../../../../styleSettings/screensizeSettings'
import { font } from '../../../../styleSettings/colours'

export const styles = StyleSheet.create({
	...generalStyles,

	mainContainer: {
		...generalStyles.mainContainer,
		paddingHorizontal: margin.horizontal * 1.5,
	},
})