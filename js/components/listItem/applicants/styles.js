import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { screenWidth, margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { font, background } from '../../../styleSettings/colours'

const avatarWidth = screenWidth / 4
const detailsWidth = screenWidth - avatarWidth
const height = 140

export const styles = StyleSheet.create({
	mainContainer: {
		...generalStyles.flexRowCenter,
		borderBottomColor: font.grey,
		borderBottomWidth: 1,
	},

	avatarContainer: {
		width: avatarWidth,
		height: height,
	},

	avatar: {
		width: '100%',
		height: '100%',
	},

	placeholder: {
		backgroundColor: 'transparent',
	},

	detailsContainer: {
		backgroundColor: background.white,
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical,
		width: detailsWidth,
		height: height,
	},

	name: {
		...generalStyles.basicFontBolder,
		fontSize: baseFont * 1.4,
	},

	container: {
		...generalStyles.flexRowCenter,
		paddingVertical: margin.vertical * 0.5,
	},

	ratingsContainer: {
		...generalStyles.flexRowCenter,
		paddingRight: margin.horizontal,
		borderRightColor: font.dullGrey,
		borderRightWidth: 1,
	},

	locationContainer: {
		...generalStyles.flexRowCenter,
		paddingLeft: margin.horizontal,
	},

	location: {
		...generalStyles.basicFont,
		color: font.dullGrey,
	},
	
	experienceContainer: {
		...generalStyles.flexRowCenter,
		paddingRight: margin.horizontal,
	},

	rateContainer: {
		...generalStyles.flexRowCenter,
	},

	icon: {
		color: font.lightBlue,
		fontSize: baseFont,
		paddingRight: margin.horizontal * 0.5,
	},

	rateIcon: {
		color: font.lightBlue,
		fontSize: baseFont * 1.2,
		paddingRight: margin.horizontal * 0.5,
		paddingTop: 3,
	},

	detailsText: {
		...generalStyles.basicFont,
		color: font.dullGrey,
		fontSize: baseFont * 0.8,
	},

	button: {
		backgroundColor: background.blue,
		borderRadius: 30,
		paddingVertical: margin.vertical * 0.4,
		marginBottom: margin.vertical,
	},

	buttonText: {
		...generalStyles.basicFont,
		color: font.white,
	}
})