import { StyleSheet } from 'react-native'

import { sharedStyles } from '../sharedStyles'

export const styles = StyleSheet.create({
	...sharedStyles,

	stackedContainer: {
		...sharedStyles.labelValueContainer,
		flexDirection: 'column',
	},

	valueContainer: {
		marginHorizontal: 0,
	},
})