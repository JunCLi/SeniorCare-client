import { StyleSheet } from 'react-native'

import { screenWidth, screenHeight, margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

import { generalStyles } from '../../../styleSettings/generalStyles'

const iconOuterWidth = screenWidth * 3 / 5

const infoScreeningWidth = iconOuterWidth / 2
const infoScreeningHeight = infoScreeningWidth * 140.52 / 108.31 

const topContainer = {
	topContainer: {
		backgroundColor: background.blueGrey,
		flex: 2,
	},

	iconOuterContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: margin.vertical * 2,
	},

	iconInnerContainer: {
		justifyContent: 'center',
		backgroundColor: background.white,
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
}

const bottomContainer = {
	bottomContainer: {
		flex: 1,
		backgroundColor: background.white,
		borderTopColor: font.lightGrey, 
		borderTopWidth: 1,
		paddingTop: margin.vertical * 3,
		paddingBottom: margin.vertical,
		paddingHorizontal: margin.horizontal * 1.2,
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
		fontFamily: fontType.sfpro,
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
		backgroundColor: background.blue
	},

	signupText: {
		...buttonStyles.text,
	},

	googleSignup: {
		...buttonStyles.button,
		backgroundColor: background.white,
		borderWidth: 1,
		borderColor: background.blue,
	},

	googleSignupText: {
		...buttonStyles.text,
		color: font.blue
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
		color: font.lightGrey,
		fontSize: baseFont,
		fontWeight: '500',
		textAlign: 'center',
	},

	login: {
		backgroundColor: 'transparent',
		marginLeft: baseFont / 4,
		padding: 0,
		borderBottomWidth: 1,
		borderBottomColor: font.yellow,
	},

	loginText: {
		color: font.yellow,
		fontSize: baseFont,
		fontWeight: '500',
	}
}

const terms = {
	termsContainer: {
		marginHorizontal: margin.horizontal * 1.5,
	},

	terms: {
		color: font.lightGrey,
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