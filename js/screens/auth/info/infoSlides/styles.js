import { StyleSheet } from 'react-native'

import { screenWidth, margin, baseFont } from '../../../../styleSettings/screensizeSettings'
import { background, font } from '../../../../styleSettings/colours'
import { fontType } from '../../../../styleSettings/fonts'

const iconOuterWidth = screenWidth * 3 / 5

const infoScreeningWidth = iconOuterWidth / 2
const infoScreeningHeight = infoScreeningWidth * 140.52 / 108.31 

const icon = StyleSheet.create({
	iconOuterContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: margin.vertical * 2,
	},

	iconInnerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: background.white,
		borderRadius: iconOuterWidth,
		width: iconOuterWidth,
		height: iconOuterWidth,
	},

	infoScreeningLogo: {
		width: infoScreeningWidth,
		height: infoScreeningHeight,
	},
})

const info = StyleSheet.create({
	infoContainer: {
		flex: 1,
	},

	textContainer: {
		marginVertical: margin.vertical,
		marginHorizontal: margin.horizontal * 2,
	},

	title: {
		color: font.blue,
		fontFamily: fontType.gothamBold,
		fontSize: baseFont * 2.4,
		marginVertical: -4,
		textAlign: 'center',
	},

	infoText: {
		color: font.blue,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.05,
		lineHeight: baseFont * 1.5,
		textAlign: 'center',
	}
})

export const styles = StyleSheet.create({
	...icon,
	...info,

	topContainer: {
		backgroundColor: background.blueGrey,
		flex: 2,
	},
})