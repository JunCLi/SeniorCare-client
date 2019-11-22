import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight, margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

import { generalStyles } from '../../../styleSettings/generalStyles'

const filterIcon = StyleSheet.create({
	filterIcon: {
		color: font.lightBlue,
		fontSize: baseFont * 1.75,
	},

	filterIconContainer: {
		marginHorizontal: margin.horizontal * 1.5,
	},
})

export const styles = StyleSheet.create({
	...generalStyles,
	...filterIcon,
	
	scrollViewContainer: {
		...generalStyles.scrollViewContainer,
		alignItems: 'center',
	},

	mainContainer: {
		...generalStyles.mainContainer,
		paddingTop: margin.vertical,
	}
})