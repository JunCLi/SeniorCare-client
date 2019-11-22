import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight, margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

const listItemWidth = screenWidth - margin.horizontal * 2.5
const listItemHeight = listItemWidth / 345 * 115
const avatarWidth = listItemWidth / 345 * 88

export const starStyles = {
	colour: '#FAB730',
	size: baseFont * 0.9,
}

export const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',

		backgroundColor: background.white,
		width: listItemWidth,
		height: listItemHeight,
		marginVertical: margin.vertical,
	},

	avatar: {
		width: avatarWidth,
		height: listItemHeight,
	},

	detailsContainer: {
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical * .75,
	},

	name: {
		color: font.black,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.25,
		fontWeight: '500',
	},

	ratingsContainer: {
		flexDirection: 'row',
	}
})

