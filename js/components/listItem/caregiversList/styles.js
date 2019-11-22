import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight, margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

const listItemWidth = screenWidth - margin.horizontal * 2.5
const listItemHeight = listItemWidth / 345 * 115
const avatarWidth = listItemWidth / 345 * 88

export const iconStyles = {
	colour: font.lightBlue,
	size: baseFont,
}

const reused = StyleSheet.create({
	flexRowCenter: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	text: {
		color: font.darkerGrey,
		fontFamily: fontType.sfpro,
	},

	icon: {
		marginRight: margin.horizontal / 3,
		color: font.lightBlue,
		fontSize: baseFont,
	}
})

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

	infoContainer: {
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical * .75,
	},

	name: {
		color: font.black,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.25,
		fontWeight: '500',
	},

	icon: {
		...reused.icon,
	},

	details: {
		...reused.text,
		fontSize: baseFont * 0.8,
	},

	ratingsLocationContainer: {
		...reused.flexRowCenter,
		marginVertical: margin.vertical * 0.75,
	},

	ratingsContainer: {
		...reused.flexRowCenter,
		borderRightWidth: 1,
		borderRightColor: font.darkerGrey,
		paddingRight: margin.horizontal,
	},

	locationContainer: {
		paddingLeft: margin.horizontal,
	},

	location: {
		...reused.text,
		fontSize: baseFont,
	},

	outerDetailsContainer: {
		...reused.flexRowCenter,
		marginVertical: margin.vertical / 2,
	},

	experienceContainer: {
		...reused.flexRowCenter,
	},

	rateContainer: {
		...reused.flexRowCenter,
		marginLeft: margin.horizontal,
	},

	rateIcon: {
		...reused.icon,
		fontSize: baseFont * 1.1,
		marginTop: margin.vertical / 4,
	},

	ageContainer: {
		...reused.flexRowCenter,
	},	

	ageIcon: {
		...reused.icon,
		fontSize: baseFont * 1.25,
		marginLeft: -3,
	}
})

