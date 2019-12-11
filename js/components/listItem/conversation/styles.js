import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { screenWidth, baseFont, margin } from '../../../styleSettings/screensizeSettings'
import { font } from '../../../styleSettings/colours'

const avatarSize = screenWidth / 6

export const styles = StyleSheet.create({
	container: {
		borderBottomColor: font.grey,
		borderBottomWidth: 1,
	},

	title: {
		...generalStyles.basicFont,
		fontSize: baseFont * 1.3,
		fontWeight: '600',
	},

	subtitle: {
		...generalStyles.basicFont,
		color: font.dullGrey,
		marginTop: margin.vertical * 0.5,
	},

	avatar: {
		width: avatarSize,
		height: avatarSize,
		borderRadius: avatarSize,
		overflow: 'hidden',
	},

	icon: {
		color: font.grey,
	}
})