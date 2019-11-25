import { StyleSheet } from 'react-native'

import { screenWidth } from '../../../styleSettings/screensizeSettings'

const arcWidth = screenWidth * 1
const arcHeight = arcWidth / 375 * 222

export const styles = StyleSheet.create({
	orangeArc: {
		width: arcWidth,
		height: arcHeight,
	},

	orangeArcContainer: {
		position: 'absolute',
		// left: 0,
		left: - (arcWidth - screenWidth) / 2,
		bottom: - (arcWidth * 1.1 - screenWidth),
	},

	placeholder: {
		backgroundColor: 'transparent',
	}
})