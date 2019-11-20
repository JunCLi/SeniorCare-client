import { StyleSheet } from 'react-native'

import { screenHeight } from '../../../styleSettings/screensizeSettings'

import { sharedStyles } from '../sharedStyles'

export const styles = StyleSheet.create({
	...sharedStyles,

	mainContainer: {
		...sharedStyles.mainContainer,
		marginTop: screenHeight / 12,
	},
})