import { StyleSheet } from 'react-native'

import { backgroundColours } from './colours'

export const generalStyles = StyleSheet.create({
	background: {
		backgroundColor: backgroundColours.white,
		flex: 1,
	},
	
	statusBar: {
		backgroundColor: backgroundColours.grey,
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