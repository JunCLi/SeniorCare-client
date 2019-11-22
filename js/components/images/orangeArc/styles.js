import { StyleSheet } from 'react-native'

import { screenWidth } from '../../../styleSettings/screensizeSettings'

const arcWidth = screenWidth
const arcHeight = arcWidth / 375 * 222

export const styles = StyleSheet.create({
	orangeArc: {
		width: arcWidth,
		height: arcHeight,
	},

	orangeArcContainer: {
		position: 'absolute',
		bottom: 0,
	},

	placeholder: {
		backgroundColor: 'transparent',
	}
})