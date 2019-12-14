import { StyleSheet } from 'react-native'

// import { generalStyles } from '../../../../styleSettings/generalStyles'
import { sharedStyles } from '../sharedStyles'
import { margin, screenHeight } from '../../../../styleSettings/screensizeSettings'

export const styles = StyleSheet.create({
	...sharedStyles,

	mainContainer: {
		...sharedStyles.mainContainer,
		paddingBottom: margin.vertical * 2,
	},
})