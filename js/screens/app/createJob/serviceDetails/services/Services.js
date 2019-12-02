import React from 'react'

import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/multiSelect/BlueWhiteButtons'

import AppointmentIcon from '../../../../../assets/images/services-icons/appointment-icon-3x.png'
import AppointmentWhiteIcon from '../../../../../assets/images/services-icons/appointment-white-icon-3x.png'
import CompanionshipIcon from '../../../../../assets/images/services-icons/companionship-icon-3x.png'
import CompanionshipWhiteIcon from '../../../../../assets/images/services-icons/companionship-white-icon-3x.png'
import DressingIcon from '../../../../../assets/images/services-icons/dressing-icon-3x.png'
import DressingWhiteIcon from '../../../../../assets/images/services-icons/dressing-white-icon-3x.png'
import DrivingIcon from '../../../../../assets/images/services-icons/driving-icon-3x.png'
import DrivingWhiteIcon from '../../../../../assets/images/services-icons/driving-white-icon-3x.png'
import FeedingIcon from '../../../../../assets/images/services-icons/feeding-icon-3x.png'
import FeedingWhiteIcon from '../../../../../assets/images/services-icons/feeding-white-icon-3x.png'
import GroomingIcon from '../../../../../assets/images/services-icons/grooming-icon-3x.png'
import GroomingWhiteIcon from '../../../../../assets/images/services-icons/grooming-white-icon-3x.png'
import BathingIcon from '../../../../../assets/images/services-icons/bathing-icon-3x.png'
import BathingWhiteIcon from '../../../../../assets/images/services-icons/bathing-white-icon-3x.png'
import MobilityIcon from '../../../../../assets/images/services-icons/mobility-icon-3x.png'
import MobilityWhiteIcon from '../../../../../assets/images/services-icons/mobility-white-icon-3x.png'

const Services = props => {
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

	const services = [
		{
			title: 'Bathing',
			value: 'bathing',
			icon: buttonIcon(BathingIcon),
			selectedIcon: buttonIcon(BathingWhiteIcon),
		},
		{
			title: 'Grooming',
			value: 'grooming',
			icon: buttonIcon(GroomingIcon),
			selectedIcon: buttonIcon(GroomingWhiteIcon),
		},
		{
			title: 'Dressing',
			value: 'dressing',
			icon: buttonIcon(DressingIcon),
			selectedIcon: buttonIcon(DressingWhiteIcon),
		},
		{
			title: 'Feeding',
			value: 'feeding',
			icon: buttonIcon(FeedingIcon),
			selectedIcon: buttonIcon(FeedingWhiteIcon),
		},
		{
			title: 'Companionship',
			value: 'companionship',
			icon: buttonIcon(CompanionshipIcon),
			selectedIcon: buttonIcon(CompanionshipWhiteIcon),
		},
		{
			title: 'Driving',
			value: 'driving',
			icon: buttonIcon(DrivingIcon),
			selectedIcon: buttonIcon(DrivingWhiteIcon),
		},
		{
			title: 'Appointments',
			value: 'appointments',
			icon: buttonIcon(AppointmentIcon),
			selectedIcon: buttonIcon(AppointmentWhiteIcon),
		},
		{
			title: 'Mobility',
			value: 'mobility',
			icon: buttonIcon(MobilityIcon),
			selectedIcon: buttonIcon(MobilityWhiteIcon),
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