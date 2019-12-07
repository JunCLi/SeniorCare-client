import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../../../styleSettings/generalStyles'
import { sharedStyles } from '../../sharedStyles'

import { background, font } from '../../../../../styleSettings/colours'
import { baseFont, margin, screenWidth } from '../../../../../styleSettings/screensizeSettings'

export const containerStyles = StyleSheet.create({
	textContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: background.lightGrey,
		padding: margin.horizontal,
		width: screenWidth / 2 - margin.horizontal * 1.5,
		// height: screenWidth / 4,
	},
})

export const fontStyles = StyleSheet.create({
	titleText: {
		...generalStyles.basicFont,
		color: font.lightGrey,
		fontSize: baseFont * 1.4,
	},

	dateText: {
		...generalStyles.basicFont,
		color: font.lightGrey,
		fontSize: baseFont * 1.1,
	}
})

export const styles = StyleSheet.create({
	...sharedStyles,
	...containerStyles,
	...fontStyles,

	endDateContainer: {
		alignSelf: 'flex-end',
	},

	selectDateContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	selectedTextContainer: {
		...containerStyles.textContainer,
		backgroundColor: background.blue,
	},

	selectedTitleText: {
		...fontStyles.titleText,
		color: font.white,
	},

	selectedDateText: {
		...fontStyles.dateText,
		color: font.white,
	},

	optional: {
		...fontStyles.dateText,
		alignSelf: 'flex-end',
		fontSize: baseFont * 0.7,
	},
})