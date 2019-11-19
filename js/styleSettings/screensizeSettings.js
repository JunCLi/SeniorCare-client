import { Dimensions } from 'react-native'

export const screenHeight = Dimensions.get('window').height
export const screenWidth = Dimensions.get('window').width

export const margin = {
	vertical: screenHeight / 96,
	horizontal: screenWidth / 32,
}

const determineFontSize = screenWidth => {
	let baseFontSize = 12

	if (screenWidth >= 360) { baseFontSize = 16 }
	
	return baseFontSize
}


export const baseFont = determineFontSize(screenWidth)