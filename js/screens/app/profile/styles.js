import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { screenWidth, screenHeight, margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'

export const styles = StyleSheet.create({
	...generalStyles,

	avatarContainer: {
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: screenHeight / 20,
	},

	avatar: {
		width: screenWidth / 2.5,
		height: screenWidth / 2.5,
		borderRadius: screenWidth / 4,
		overflow: 'hidden',
	},

	name: {
		...generalStyles.basicFontBolder,
		fontSize: baseFont * 1.25,
		marginVertical: margin.vertical * 2,
		textAlign: 'center',
		textTransform: 'capitalize',
	},

	menuContainer: {
		marginTop: margin.vertical * 3,
	},

	listItemOuterContainer: {
		backgroundColor: 'white',
		paddingHorizontal: margin.horizontal * 1.5,
		
	},
	
	listItemContainer: {
		borderBottomColor: font.grey,
		borderBottomWidth: 1,
		paddingVertical: margin.vertical * 2,
		paddingLeft: 0,
	},

	listItemTitle: {
		...generalStyles.basicFont,
		fontSize: baseFont * 1.10,
	},

	icon: {
		color: font.lightBlue,
	},

	logoutText: {
		...generalStyles.basicFontBolder,
		color: font.white,
	},

	logoutButton: {
		alignSelf: 'center',
		backgroundColor: background.blue,
		borderRadius: 30,
		marginTop: screenHeight / 16,
		width: screenWidth * 0.8,
	}
})