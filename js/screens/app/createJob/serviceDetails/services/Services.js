import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/multiSelect/BlueWhiteButtons'

const Services = props => {
	const { values, setFieldValue } = props.formikProps

	const services = [
		{
			title: 'Bathing',
			value: 'bathing',
		},
		{
			title: 'Grooming',
			value: 'grooming',
		},
		{
			title: 'Dressing',
			value: 'dressing',
		},
		{
			title: 'Feeding',
			value: 'feeding',
		},
		{
			title: 'Companionship',
			value: 'companionship',
		},
		{
			title: 'Driving',
			value: 'driving',
		},
		{
			title: 'Appointments',
			value: 'appointments',
		},
		{
			title: 'Mobility',
			value: 'mobility',
		},
	]

	const handleSelect = selected => {
		const containsSelected = values.services.filter(service => service === selected).length
			? true : false

		const newArray = containsSelected
			? values.services.filter(service => service !== selected)
			: [...values.services, selected]

		setFieldValue('services', newArray)
	}

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>Select the services you will need</Text>
			</View>
			<BlueWhiteButtons
				buttonArray={services}
				selected={values.services}
				handleSelect={handleSelect}
			/>
		</View>
	)
}

export default Services