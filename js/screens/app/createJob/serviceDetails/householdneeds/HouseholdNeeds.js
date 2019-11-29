import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/multiSelect/BlueWhiteButtons'

const HouseholdNeeds = props => {
	const { values, setFieldValue } = props.formikProps

	const householdNeeds = [
		{
			title: 'Errands',
			value: 'errands',
		},
		{
			title: 'Meal Prep',
			value: 'mealPrep',
		},
		{
			title: 'Housekeeping',
			value: 'housekeeping',
		},
		{
			title: 'Laundry',
			value: 'laundry',
		},
		{
			title: 'Shopping',
			value: 'shopping',
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