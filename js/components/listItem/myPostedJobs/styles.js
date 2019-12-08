import { StyleSheet } from 'react-native'

import { generalStyles } from '../../../styleSettings/generalStyles'

import { font, background } from '../../../styleSettings/colours'
import { screenHeight, margin, screenWidth, baseFont } from '../../../styleSettings/screensizeSettings'

const sharedStyles = StyleSheet.create({
	container: {
		paddingHorizontal: margin.horizontal,
		paddingVertical: margin.vertical * 0.5,
		height: '100%',
	},

})

export const styles = StyleSheet.create({
	mainContainer: {
		...generalStyles.flexRowCenter,
		justifyContent: 'space-between',
		marginVertical: margin.vertical,
		// minHeight: 120,
		height: 120,
	},

	jobDetailsContainer: {
		...sharedStyles.container,
		justifyContent: 'space-between',
		backgroundColor: background.white,
		width: screenWidth * 0.65 - margin.horizontal,
	},

	jobApplicantsContainer: {
		...sharedStyles.container,
		backgroundColor: background.blue,
		width: screenWidth * 0.35 - margin.horizontal * 2,
	},

	postedDate: {
		...generalStyles.basicFont,
		color: font.dullGrey,
		fontSize: baseFont * 0.75,
	},

	title: {
		...generalStyles.basicFont,
		fontSize: baseFont * 1.25,
	},

	seniorName: {
		...generalStyles.basicFont,
		color: font.darkerGrey,
		fontSize: baseFont * 0.9,
	},

	detailsContainer: {
		...generalStyles.flexRowCenter,
		marginTop: margin.vertical * 0.5,
	},

	detailsInnerContainer: {
		...generalStyles.flexRowCenter,
	},

	icon: {
		color: font.lightBlue,
		fontSize: baseFont * 0.9,
	},

	detailsText: {
		color: font.dullGrey,
		fontSize: baseFont * 0.9,
		marginLeft: margin.horizontal * 0.4,
		marginRight: margin.horizontal * 0.8,
	},

	numberApplicants: {
		...generalStyles.basicFont,
		flex: 1,
		color: font.white,
		fontSize: baseFont * 3,
		paddingTop: margin.vertical * 2,
		textAlign: 'center',
	},

	applicantText: {
		...generalStyles.basicFont,
		color: font.white,
		fontSize: baseFont * 0.9,
		textAlign: 'center',
	}
})