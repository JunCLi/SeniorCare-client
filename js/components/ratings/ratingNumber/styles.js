import { StyleSheet } from 'react-native'

import { baseFont } from '../../../styleSettings/screensizeSettings'
import { font } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

export const styles = props => StyleSheet.create({
	text: {
		color: props.colour ? props.colour : font.lightBlue,
		fontSize: props.size ? props.size : baseFont,
		fontFamily: props.fontFamily ? props.fontFamily : fontType.sfpro
	}
})