import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../../styleSettings/generalStyles'

import { font, background } from '../../../../styleSettings/colours'
import { margin, baseFont, screenWidth, screenHeight } from '../../../../styleSettings/screensizeSettings'

export const styles = StyleSheet.create({
	...generalStyles,

	avatar: {
		width: screenWidth,
		height: screenHeight / 3,
	},

	detailsContainer: {
		backgroundColor: background.white,
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical,
	}
})