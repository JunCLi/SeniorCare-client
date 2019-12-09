import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../../styleSettings/generalStyles'

import { margin } from '../../../../styleSettings/screensizeSettings'

export const styles = StyleSheet.create({
	placeholderAvatar: {
		backgroundColor: 'transparent'
	},

	name: {
		...generalStyles.basicFont,
	}
})

export const dynamicStyles = avatarPosition => StyleSheet.create({
	listItemContainer: {
		paddingLeft: avatarPosition === 'aboveHeader' ? margin.horizontal : 0,
	}
})