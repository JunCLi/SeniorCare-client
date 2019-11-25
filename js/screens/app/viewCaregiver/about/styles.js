import { StyleSheet } from 'react-native'

import { margin, baseFont } from '../../../../styleSettings/screensizeSettings'
import { background, font } from '../../../../styleSettings/colours'
import { fontType } from '../../../../styleSettings/fonts'

const flexRowCenter = {
	flexDirection: 'row',
	alignItems: 'center',
}

const sharedIcon = {
	marginRight: margin.horizontal / 3,
	color: font.lightBlue,
	fontSize: baseFont * 0.8,
}

const iconStyles = StyleSheet.create({
	icon: {
		...sharedIcon,
	},

	ageIcon: {
		...sharedIcon,
		fontSize: baseFont,
		marginLeft: 1,
	},

	rateIcon: {
		...sharedIcon,
		fontSize: baseFont,
		marginTop: margin.vertical / 4,
	},
})


export const styles = StyleSheet.create({
	...iconStyles,
	
	aboutContainer: {
		marginHorizontal: margin.horizontal,
		marginVertical: margin.vertical * 1.5,
	},

	detailsContainer: {
		borderBottomColor: font.lightGrey,
		borderBottomWidth: 1,
	},

	name: {
		color: font.black, 
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.4,
		fontWeight: '600',
		marginBottom: margin.vertical * 0.25,
	},

	ratingsLocationContainer: {
		...flexRowCenter,
		marginBottom: margin.vertical * 0.75,
	},

	ratingsContainer: {
		...flexRowCenter,
		paddingRight: margin.horizontal,
		borderRightWidth: 1,
		borderRightColor: font.dullGrey
	},

	ratingsIcon: {
		marginHorizontal: 2,
	},

	location: {
		color: font.dullGrey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont,
		marginLeft: margin.horizontal,
	},
	
	lowerDetailsOuterContainer: {
		...flexRowCenter,
		flexWrap: 'wrap',
		marginVertical: margin.vertical,
	},

	lowerDetailsInnerContainer: {
		...flexRowCenter,
		marginRight: margin.horizontal,
	},

	details: {
		color: font.dullGrey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 0.75,
	},

	aboutMeContainer: {
		paddingVertical: margin.vertical,
	},

	aboutMeTitle: {
		marginVertical: margin.vertical,
		color: font.dullGrey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont * 1.25,
		fontWeight: '500',
	},

	aboutMe: {
		color: font.dullGrey,
		fontFamily: fontType.sfpro,
		fontSize: baseFont,
	}
})