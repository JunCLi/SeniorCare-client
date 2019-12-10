import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../../styleSettings/generalStyles'
import { margin } from '../../../../styleSettings/screensizeSettings'
import { font } from '../../../../styleSettings/colours'

export const styles = StyleSheet.create({
	...generalStyles,

	detailsContainer: {
		...generalStyles.detailsContainer,
		marginLeft: margin.horizontal * 0.5,
		marginVertical: margin.vertical * 0.5,
	},

	icon: {
		color: font.grey,
	}
})