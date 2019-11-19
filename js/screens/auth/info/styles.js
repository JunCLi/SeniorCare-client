import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight, margins, baseFont } from '../../../styleSettings/screensizeSettings'
import { backgroundColours, fontColours } from '../../../styleSettings/colours'

import { generalStyles } from '../../../styleSettings/generalStyles'

const iconOuterWidth = screenWidth * 3 / 5

const infoScreeningWidth = iconOuterWidth / 2
const infoScreeningHeight = infoScreeningWidth * 140.52 / 108.31 

const topContainer = {
	topContainer: {
		backgroundColor: backgroundColours.blueGrey,
		flex: 2,
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
		flex: 1,
		backgroundColor: backgroundColours.white,
		borderTopColor: fontColours.grey, 
		borderTopWidth: 1,
		paddingTop: margins.vertical * 3,
		paddingBottom: margins.vertical,
		paddingHorizontal: margins.horizontal * 1.2,
	},

	signupAndLoginContainer: {
		flex: 1,
	}
}

const buttonStyles = {
	button: {
		alignSelf: 'center',
		width: screenWidth / 2 - bottomContainer.bottomContainer.paddingHorizontal * 1.5,
		height: baseFont * 2.3,
		padding: 0,
		borderRadius: 30,	
	},

	text: {
		fontFamily: 'SFProText-Regular',
		fontSize: baseFont,
	}
}

const signup = {
	signupContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	signup: {
		...buttonStyles.button,
		backgroundColor: backgroundColours.blue
	},

	signupText: {
		...buttonStyles.text,
	},

	googleSignup: {
		...buttonStyles.button,
		backgroundColor: backgroundColours.white,
		borderWidth: 1,
		borderColor: backgroundColours.blue,
	},

	googleSignupText: {
		...buttonStyles.text,
		color: fontColours.blue
	},

	googleIcon: {
		marginRight: baseFont / 3,
		width: baseFont,
		height: baseFont,
	},
}

const login = {
	loginContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: screenHeight / 16,
	},

	loginMessage: {
		color: fontColours.grey,
		fontSize: baseFont,
		fontWeight: '500',
		textAlign: 'center',
	},

	login: {
		backgroundColor: 'transparent',
		marginLeft: baseFont / 4,
		padding: 0,
		borderBottomWidth: 1,
		borderBottomColor: fontColours.yellow,
	},

	loginText: {
		color: fontColours.yellow,
		fontSize: baseFont,
		fontWeight: '500',
		// textDecorationLine: 'underline',
	}
}

const terms = {
	termsContainer: {
		marginHorizontal: margins.horizontal * 1.5,
	},

	terms: {
		color: fontColours.grey,
		fontSize: baseFont * .8,
		textAlign: 'center',
	},

	termsConditions: {
		textDecorationLine: 'underline',
	},
}

export const styles = StyleSheet.create({
	...generalStyles,
	...topContainer,
	...infoScreening,
	...info,
	...bottomContainer,
	...signup,
	...login,
	...terms,
})