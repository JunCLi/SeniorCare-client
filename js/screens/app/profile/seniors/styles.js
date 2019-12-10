import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../../styleSettings/generalStyles'

import { font, background } from '../../../../styleSettings/colours'
import { margin, baseFont, screenWidth } from '../../../../styleSettings/screensizeSettings'

export const styles = StyleSheet.create({
	...generalStyles,

	addSeniorContainer: {
		...generalStyles.flexRowCenter,
		alignSelf: 'center',
		paddingVertical: margin.vertical * 2,
		width: screenWidth * 0.8,
	},
	
	iconContainer: {
		backgroundColor: background.darkerBlueGrey,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: baseFont * 3,
		width: baseFont * 2.5,
		height: baseFont * 2.5,
	},

	icon: {
		color: font.blue,
	},

	addSeniorText: {
		...generalStyles.basicFontBolder,
		fontSize: baseFont * 1.1,
		marginLeft: margin.horizontal,
		textAlign: 'center',
	}
})