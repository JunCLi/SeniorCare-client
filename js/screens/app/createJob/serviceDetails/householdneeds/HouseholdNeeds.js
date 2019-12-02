import React from 'react'

import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/multiSelect/BlueWhiteButtons'

import ErrandIcon from '../../../../../assets/images/household-needs-icons/errand-icon-3x.png'
import ErrandWhiteIcon from '../../../../../assets/images/household-needs-icons/errand-white-icon-3x.png'
import MealprepIcon from '../../../../../assets/images/household-needs-icons/mealprep-icon-3x.png'
import MealprepWhiteIcon from '../../../../../assets/images/household-needs-icons/mealprep-white-icon-3x.png'
import HousekeepingIcon from '../../../../../assets/images/household-needs-icons/housekeeping-icon-3x.png'
import HousekeepingWhiteIcon from '../../../../../assets/images/household-needs-icons/housekeeping-white-icon-3x.png'
import LaundryIcon from '../../../../../assets/images/household-needs-icons/laundry-icon-3x.png'
import LaundryWhiteIcon from '../../../../../assets/images/household-needs-icons/laundry-white-icon-3x.png'
import ShoppingIcon from '../../../../../assets/images/household-needs-icons/shopping-icon-3x.png'
import ShoppingWhiteIcon from '../../../../../assets/images/household-needs-icons/shopping-white-icon-3x.png'

const HouseholdNeeds = props => {
	const { values, setFieldValue } = props.formikProps

	const buttonIcon = icon => (
		<View style={styles.iconContainer}>
			<Image
				source={icon}
				resizeMode='contain'
				style={styles.icon}
				placeholderStyle={styles.placeholderIcon}
			/>
		</View>
	)

	const householdNeeds = [
		{
			title: 'Errands',
			value: 'errands',
			icon: buttonIcon(ErrandIcon),
			selectedIcon: buttonIcon(ErrandWhiteIcon),
		},
		{
			title: 'Meal Prep',
			value: 'mealPrep',
			icon: buttonIcon(MealprepIcon),
			selectedIcon: buttonIcon(MealprepWhiteIcon),
		},
		{
			title: 'Housekeeping',
			value: 'housekeeping',
			icon: buttonIcon(HousekeepingIcon),
			selectedIcon: buttonIcon(HousekeepingWhiteIcon),
		},
		{
			title: 'Laundry',
			value: 'laundry',
			icon: buttonIcon(LaundryIcon),
			selectedIcon: buttonIcon(LaundryWhiteIcon),
		},
		{
			title: 'Shopping',
			value: 'shopping',
			icon: buttonIcon(ShoppingIcon),
			selectedIcon: buttonIcon(ShoppingWhiteIcon),
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