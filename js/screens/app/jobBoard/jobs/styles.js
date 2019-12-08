import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../../styleSettings/generalStyles'

import { font } from '../../../../styleSettings/colours'
import { screenHeight, margin } from '../../../../styleSettings/screensizeSettings'

export const styles = StyleSheet.create({
	mainContainer: {
		marginTop: screenHeight / 20,
		marginHorizontal: margin.horizontal,
	},

	title: {
		...generalStyles.basicFontBolder,
		color: font.blue,
	},
})