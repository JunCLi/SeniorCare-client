import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'
import { sharedStyles } from '../sharedStyles'

import { margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { background, font } from '../../../styleSettings/colours'

export const styles = StyleSheet.create({
	...sharedStyles,

	mainContainer: {
		...sharedStyles.mainContainer,
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginVertical: margin.vertical * 1.5,
	},

	serviceContainer: {
		backgroundColor: background.blueGrey,
		borderRadius: 30,
		marginHorizontal: margin.horizontal * 0.5,
		marginVertical: margin.vertical * 0.75,
		paddingHorizontal: margin.horizontal * 2,
		paddingVertical: margin.vertical * 0.5,
	},

	service: {
		...generalStyles.basicFont,
		color: font.blue,
	},
})