import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../../../styleSettings/generalStyles'
import { sharedStyles } from '../../sharedStyles'

import { margin, screenHeight } from '../../../../../styleSettings/screensizeSettings'

export const styles = StyleSheet.create({
	...generalStyles,
	...sharedStyles,

	mainContainer: {
		...generalStyles.mainContainer,
		marginHorizontal: margin.horizontal * 1.5
	},

	questionContainer: {
		...sharedStyles.questionContainer,
		marginTop: screenHeight / 24,
	}
})