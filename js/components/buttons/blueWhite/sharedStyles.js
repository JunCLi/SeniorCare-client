import { StyleSheet } from 'react-native'

import { margin, baseFont, screenWidth } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

const sharedButtonStyles = {
	button: {
		backgroundColor: background.white,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: font.blue,
		marginVertical: margin.vertical,
		paddingVertical: margin.vertical,
		// width: 'screenWidth / 2 - margin.horizontal * 1.5',
	},

	title: {
		color: font.blue,
		fontFamily: fontType.sfpro,
	}
}

export const sharedStyles = StyleSheet.create({
	buttonsViewContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},

	buttonsContainer: {
		width: '48.5%',
	},

	button: {
		...sharedButtonStyles.button,
	},

	buttonTitle: {
		...sharedButtonStyles.title
	},

	selectedButton: {
		...sharedButtonStyles.button,
		backgroundColor: background.blue,
	},

	selectedButtonTitle: {
		...sharedButtonStyles.title,
		color: font.white,
	},
})