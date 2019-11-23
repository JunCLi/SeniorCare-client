import { StyleSheet } from 'react-native'

import { screenWidth, margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

export const dynamicStyles = sliderProps => {
	const { value, max, min, valueWidth = 37 } = sliderProps

	const position = value - min
	const range = max - min
	const marginLeft = position / range * (screenWidth - margin.horizontal * 7.5) + margin.horizontal / 3

	return StyleSheet.create({
		sliderValueContainer: {
			marginLeft: marginLeft,
			marginBottom: - margin.vertical,
			width: valueWidth,
		},
	})
}

export const styles = StyleSheet.create({
	sliderContainer: {
		marginHorizontal: margin.horizontal,
	},

	slider: {
		marginHorizontal: margin.horizontal,
	},
	
	thumbStyle: {
		backgroundColor: font.white,
		shadowColor: font.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 2,
		shadowOpacity: 0.4,
	},

	sliderValue: {
		alignSelf: 'center',
		color: font.darkerGrey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont,
	},

	minValue: {
		color: font.grey,
		fontFamily: fontType.sfpro,
		marginTop: -margin.vertical,
	},
})