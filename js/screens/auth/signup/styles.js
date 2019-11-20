import { StyleSheet } from 'react-native'

import { screenHeight, screenWidth, baseFont, margin } from '../../../styleSettings/screensizeSettings'
import { font, background } from '../../../styleSettings/colours'
import { fontType } from '../../../styleSettings/fonts'

import { generalStyles, submitButton } from '../../../styleSettings/generalStyles'

export const styles = StyleSheet.create({
	...generalStyles,
	...submitButton,
})