import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { background, font } from '../../../styleSettings/colours'
import { screenWidth, margin, baseFont } from '../../../styleSettings/screensizeSettings'

const serviceBubbleMarginHorizontal = margin.horizontal * 0.4
const serviceBubbleMarginVertical = margin.horizontal * 0.4

export const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: background.white,
		marginVertical: margin.vertical * 0.75,
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical,
		width: screenWidth - margin.horizontal * 3,
	},

	familyInfoContainer: {
		padding: 0,
	},

	familyInfoTitle: {
		...generalStyles.basicFont,
		fontSize: baseFont * 0.9,
	},

	familyInfoSubTitle: {
		...generalStyles.basicFont,
		color: font.lightGrey,
		fontSize: baseFont * 0.7,
	},

	jobTitle: {
		...generalStyles.basicFontBolder,
		fontSize: baseFont * 1.25,
		marginVertical: margin.vertical * 0.75,
	},

	locationRateContainer: {
		...generalStyles.flexRowCenter,

	},

	infoContainer: {
		...generalStyles.flexRowCenter,
		marginRight: margin.horizontal,
	},

	icon: {
		color: font.lightBlue,
		fontSize: baseFont * 1.25,
	},

	location: {
		...generalStyles.basicFont,
		color: font.dullGrey,
		fontSize: baseFont * 0.9,
		marginBottom: 2,
	},

	rateIcon: {
		color: font.lightBlue,
		fontSize: baseFont * 1.1,
	},

	hourlyRate: {
		...generalStyles.basicFont,
		color: font.dullGrey,
		fontSize: baseFont * 0.9,
		marginLeft: margin.horizontal * 0.5,
		marginBottom: 2,
	},

	servicesContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: margin.vertical,
		marginHorizontal: -serviceBubbleMarginHorizontal,
	},

	serviceBubble: {
		backgroundColor: background.blueGrey,
		borderRadius: 20,
		marginHorizontal: serviceBubbleMarginHorizontal,
		marginVertical: serviceBubbleMarginVertical,
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical * 0.4,
	},

	serviceText: {
		...generalStyles.basicFont,
		color: font.blue,
		fontSize: baseFont * 0.8,
	},
})