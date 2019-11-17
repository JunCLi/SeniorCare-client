import { StyleSheet } from 'react-native'

import { backgroundColours } from './colours'

export const generalStyles = StyleSheet.create({
	background: {
		backgroundColor: backgroundColours.grey,
		flex: 1,
	},
	
	scrollViewFix: {
		flexGrow: 1,
	},
	
	mainContainer: {
		flex: 1,
	},

	transparentPlaceholder: {
		backgroundColor: 'transparent'
	},
})