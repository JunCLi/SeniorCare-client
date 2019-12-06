import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'
import { sharedStyles } from '../sharedStyles'

export const styles = StyleSheet.create({
	...sharedStyles,

	stackedContainer: {
		...sharedStyles.labelValueContainer,
		flexDirection: 'column',
	},

	valueContainer: {
		...sharedStyles.valueContainer,
		marginHorizontal: 0,
	},

	placeholderAvatar: {
		backgroundColor: 'transparent'
	},

	name: {
		...generalStyles.basicFont,
	},

	listItemContainer: {
		paddingLeft: 0,
	},
})