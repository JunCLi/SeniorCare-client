import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { margin, screenWidth } from '../../../styleSettings/screensizeSettings'

export const constants = {
	borderRadius: 15,
	endMargin: screenWidth / 4,
}

export const sharedStyles = StyleSheet.create({
	mainContainer: {
		marginBottom: margin.vertical,
	},

	messageContainer: {
		// marginHorizontal: margin.horizontal * 0.75,
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical * 1.5,

		borderBottomLeftRadius: constants.borderRadius,
		borderBottomRightRadius: constants.borderRadius,
	},

	message: {
		...generalStyles.basicFont,
	},
})