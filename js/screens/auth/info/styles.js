import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight, margins, baseFont } from '../../../styleSettings/screensizeSettings'
import { backgroundColours, fontColours } from '../../../styleSettings/colours'

import { generalStyles } from '../../../styleSettings/generalStyles'

const topContainerHeight = screenHeight * 2 / 3

const iconOuterWidth = screenWidth * 3 / 5

const infoScreeningWidth = iconOuterWidth / 2
const infoScreeningHeight = infoScreeningWidth * 140.52 / 108.31 

const topContainer = {
	topContainer: {
		backgroundColor: backgroundColours.blueGrey,
		flex: 1,
	},

	iconOuterContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: margins.vertical * 2,
	},

	iconInnerContainer: {
		justifyContent: 'center',
		backgroundColor: backgroundColours.white,
		borderRadius: iconOuterWidth,
		width: iconOuterWidth,
		height: iconOuterWidth,
	}
}

const infoScreening = {
	infoScreeningContainer: {
		width: infoScreeningWidth,
		height: infoScreeningHeight,
		alignSelf: 'center',
	},

	infoScreeningLogo: {
		width: '100%',
		height: '100%',
	},
}

const info = {
	infoContainer: {
		flex: 1,
	},

	textContainer: {
		marginVertical: margins.vertical,
		marginHorizontal: margins.horizontal * 2,
	},

	title: {
		color: fontColours.blue,
		fontFamily: 'GothamRounded-Bold',
		fontSize: baseFont * 2.4,
		marginVertical: -4,
		textAlign: 'center',
	},

	infoText: {
		color: fontColours.blue,
		fontFamily: 'SFProText-Regular',
		fontSize: baseFont * 1.05,
		lineHeight: baseFont * 1.5,
		textAlign: 'center',
	}
}

const bottomContainer = {
	bottomContainer: {
		flex: 2,
		paddingVertical: margins.vertical * 3,
		paddingHorizontal: margins.horizontal * 2,
	},
}

export const styles = StyleSheet.create({
	...generalStyles,
	...topContainer,
	...infoScreening,
	...info,
	...bottomContainer,

	signupContainer: {
		flexDirection: 'row',
	},

	button: {
		alignSelf: 'center',
		width: '90%',
		height: baseFont * 2.3,
		padding: 0,
		borderRadius: 30,
	},

	buttonText: {
		fontSize: baseFont,
	}

})