import { StyleSheet } from 'react-native'

import { margin } from '../../../../styleSettings/screensizeSettings'

import { generalStyles } from '../../../../styleSettings/generalStyles'

export const styles = StyleSheet.create({
	...generalStyles,

	mainContainer: {
		...generalStyles.mainContainer,
		marginHorizontal: margin.horizontal * 1.5
	}
})