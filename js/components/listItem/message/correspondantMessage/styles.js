import { StyleSheet } from 'react-native'

import { sharedStyles, constants } from '../sharedStyles'

import { background } from '../../../../styleSettings/colours'
import { margin } from '../../../../styleSettings/screensizeSettings'

export const styles = StyleSheet.create({
	...sharedStyles,

	mainContainer: {
		...sharedStyles.mainContainer,
		flexDirection: 'row',
	},

	messageContainer: {
		...sharedStyles.messageContainer,
		alignSelf: 'flex-start',
		backgroundColor: background.convoGrey,

		borderTopRightRadius: constants.borderRadius,

		marginRight: constants.endMargin,
		marginLeft: margin.horizontal,
	}
})