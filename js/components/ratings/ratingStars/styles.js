import { StyleSheet } from 'react-native'

import { baseFont, margin } from '../../../styleSettings/screensizeSettings'

export const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		marginRight: margin.horizontal / 2,
	},
})

export const starStyles = {
	colour: '#FAB730',
	size: baseFont,
}

export const dynamicStyles = (input) => {
	const { marginHorizontal = 1 } = input 

	return StyleSheet.create({
		icon: {
			marginHorizontal: marginHorizontal
		}
	})
}

