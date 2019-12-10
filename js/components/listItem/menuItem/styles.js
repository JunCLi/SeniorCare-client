import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { font } from '../../../styleSettings/colours'
import { margin, baseFont } from '../../../styleSettings/screensizeSettings'

export const styles = StyleSheet.create({
	container: {
		paddingLeft: 0,
		paddingVertical: margin.vertical,
	},

	title: {
		...generalStyles.basicFont,
		color: font.dullGrey
	},

	icon: {
		color: font.grey,
	},

	
})

export const dynamicStyles = (toggle) => StyleSheet.create({
	slider: {
		flexDirection: toggle ? 'row-reverse' : 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

		backgroundColor: toggle ? font.blue : '#cc0000',
		borderRadius: 20,
		borderWidth: 2,
		borderColor: font.grey,

		paddingHorizontal: 6,
		paddingVertical: 2,
		

		width: 60,
		height: 25,
	},

	sliderText: {
		...generalStyles.basicFontBolder,
		color: font.white,
		fontSize: baseFont * 0.8,
		textAlign: toggle ? 'left' : 'right',
	},

	toggleButton: {
		backgroundColor: 'white',
		borderRadius: 30,
		borderWidth: 2,
		borderColor: font.grey,

		width: 27,
		height: 27,
		marginLeft: toggle ? 0 : -8,
		marginRight: toggle ? -8 : 0,
	}
}) 