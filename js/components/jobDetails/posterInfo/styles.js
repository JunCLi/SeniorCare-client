import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { margin, baseFont } from '../../../styleSettings/screensizeSettings'
import { font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

export const styles = StyleSheet.create({
	mainContainer: {
		marginHorizontal: margin.horizontal,
		marginBottom: margin.vertical * 2,
	},

	listItemContainer: {
		marginLeft: 0,
		paddingLeft: 0,
	},

	title: {
		...generalStyles.weightedBasicFont,
	},

	subTitle: {
		...generalStyles.basicFont,
		color: font.grey,
		fontSize: baseFont * 0.8,
	},

	placeholderAvatar: {
		backgroundColor: 'transparent',
	},

	jobTitle: {
		...generalStyles.weightedBasicFont,
		fontSize: baseFont * 1.4,
	},
})