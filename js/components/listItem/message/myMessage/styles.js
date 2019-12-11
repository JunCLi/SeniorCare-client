import { StyleSheet } from 'react-native'

import { sharedStyles, constants } from '../sharedStyles'

import { background } from '../../../../styleSettings/colours'
import { screenWidth } from '../../../../styleSettings/screensizeSettings'

export const styles = StyleSheet.create({
	...sharedStyles,

	messageContainer: {
		...sharedStyles.messageContainer,
		alignSelf: 'flex-end',
		backgroundColor: background.convoBlue,

		borderTopLeftRadius: constants.borderRadius,


		marginRight: 0,
		marginLeft: constants.endMargin,
	}
})