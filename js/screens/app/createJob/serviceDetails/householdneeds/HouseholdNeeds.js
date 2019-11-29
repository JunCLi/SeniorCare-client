import React from 'react'

import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/multiSelect/BlueWhiteButtons'

import ErrandIcon from '../../../../../assets/images/household-needs-icons/errand-icon-3x.png'
import MealprepIcon from '../../../../../assets/images/household-needs-icons/mealprep-icon-3x.png'
import HousekeepingIcon from '../../../../../assets/images/household-needs-icons/housekeeping-icon-3x.png'
import LaundryIcon from '../../../../../assets/images/household-needs-icons/laundry-icon-3x.png'
import ShoppingIcon from '../../../../../assets/images/household-needs-icons/shopping-icon-3x.png'

const HouseholdNeeds = props => {
	const { values, setFieldValue } = props.formikProps

	// TODO alternative white icon for selected images

	const householdNeeds = [
		{
			title: 'Errands',
			value: 'errands',
			icon: <View style={styles.iconContainer}>
					<Image
						source={ErrandIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>,
		},
		{
			title: 'Meal Prep',
			value: 'mealPrep',
			icon: <View style={styles.iconContainer}>
					<Image
						source={MealprepIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
		},
		{
			title: 'Housekeeping',
			value: 'housekeeping',
			icon: <View style={styles.iconContainer}>
					<Image
						source={HousekeepingIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
		},
		{
			title: 'Laundry',
			value: 'laundry',
			icon: <View style={styles.iconContainer}>
					<Image
						source={LaundryIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
		},
		{
			title: 'Shopping',
			value: 'shopping',
			icon: <View style={styles.iconContainer}>
					<Image
						source={ShoppingIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
		},
	]

	const handleSelect = selected => {
		const containsSelected = values.householdNeeds.filter(service => service === selected).length
			? true : false

		const newArray = containsSelected
			? values.householdNeeds.filter(service => service !== selected)
			: [...values.householdNeeds, selected]

		setFieldValue('householdNeeds', newArray)
	}

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>Select the Household Needs you will need</Text>
			</View>
			<BlueWhiteButtons
				buttonArray={householdNeeds}
				selected={values.householdNeeds}
				handleSelect={handleSelect}
			/>
		</View>
	)
}

export default HouseholdNeeds