import { StyleSheet } from 'react-native'

import { background } from './colours'

export const generalStyles = StyleSheet.create({
	background: {
		backgroundColor: background.white,
		flex: 1,
	},
	
	statusBar: {
		backgroundColor: background.grey,
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