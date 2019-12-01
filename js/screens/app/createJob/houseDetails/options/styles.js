import { StyleSheet } from 'react-native'

import { baseFont, margin } from '../../../../../styleSettings/screensizeSettings'

import { sharedStyles } from '../../sharedStyles'

export const styles = StyleSheet.create({
	...sharedStyles,

	optionContainer: {
		marginBottom: margin.vertical * 3,
	},

	questionContainer: {
		...sharedStyles.questionContainer,
		marginBottom: margin.vertical * 0.5,
	},

	question: {
		...sharedStyles.question,
		fontSize: baseFont,
	}
})