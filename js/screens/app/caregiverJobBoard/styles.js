import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'
import { margin } from '../../../styleSettings/screensizeSettings'
import { font } from '../../../styleSettings/colours'

export const styles = StyleSheet.create({
	...generalStyles,

	mainContainer: {
		...generalStyles.mainContainer,
		marginHorizontal: margin.horizontal * 1.5,
	},

	stillApplyingContainer: {
		marginVertical: margin.vertical * 3,
	},

	stillApplyingTitle: {
		...generalStyles.basicFontBolder,
		color: font.blue,
		marginBottom: margin.vertical,
	}
})