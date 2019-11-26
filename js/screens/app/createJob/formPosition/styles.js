import { StyleSheet } from 'react-native'

import { margin, baseFont, screenHeight } from '../../../../styleSettings/screensizeSettings'
import { background, font } from '../../../../styleSettings/colours'
import { fontType } from '../../../../styleSettings/fonts'

import { generalStyles } from '../../../../styleSettings/generalStyles'

export const styles = StyleSheet.create({
	mainContainer: {
		marginHorizontal: margin.horizontal * 1.5,
		marginVertical: screenHeight / 24,
	},

	title: {
		color: font.black,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.2,
	},

	stepsContainer: {
		...generalStyles.flexRowCenter,
		marginVertical: margin.vertical * .75,
	},

	singleStepContainer: {
		marginRight: margin.horizontal * 2 / 3,
	},

	completedStepNumberCircle: {
		backgroundColor: background.yellow,
	},

	completedStepNumber: {
		color: font.white,
	},

	stepNumberCircle: {
		backgroundColor: background.white,
		borderWidth: 1,
		borderColor: background.yellow,
	},

	stepNumber: {
		color: font.black,
	}
})