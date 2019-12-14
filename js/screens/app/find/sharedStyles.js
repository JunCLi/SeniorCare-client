import { StyleSheet } from 'react-native'

import { margin, baseFont, screenHeight } from '../../../styleSettings/screensizeSettings'
import { font } from '../../../styleSettings/colours'

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

export const sharedStyles = StyleSheet.create({
	...generalStyles,
	...filterIcon,
	
	scrollViewContainer: {
		...generalStyles.scrollViewContainer,
		alignItems: 'center',
	},

	mainContainer: {
		...generalStyles.mainContainer,
		paddingTop: margin.vertical,
	},

	extraSpace: {
		height: screenHeight / 24,
	}
})