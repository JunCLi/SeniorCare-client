import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight, baseFont, margin } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'

import { generalStyles } from '../../../styleSettings/generalStyles'

export const styles = StyleSheet.create({
	...generalStyles,

	topRightIconContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: margin.horizontal * 0.5,
	},

	icons: {
		color: font.lightBlue,
		fontSize: baseFont * 1.5,
		marginHorizontal: margin.horizontal * .75,
	}
})