import React from 'react'

import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/multiSelect/BlueWhiteButtons'

import AppointmentIcon from '../../../../../assets/images/services-icons/appointment-icon-3x.png'
import CompanionshipIcon from '../../../../../assets/images/services-icons/companionship-icon-3x.png'
import DressingIcon from '../../../../../assets/images/services-icons/dressing-icon-3x.png'
import DrivingIcon from '../../../../../assets/images/services-icons/driving-icon-3x.png'
import FeedingIcon from '../../../../../assets/images/services-icons/feeding-icon-3x.png'
import GroomingIcon from '../../../../../assets/images/services-icons/grooming-icon-3x.png'
import BathingIcon from '../../../../../assets/images/services-icons/bathing-icon-3x.png'
import MobilityIcon from '../../../../../assets/images/services-icons/mobility-icon-3x.png'

const Services = props => {
	const { values, setFieldValue } = props.formikProps

	// TODO alternative white icon for selected images

	const services = [
		{
			title: 'Bathing',
			value: 'bathing',
			icon: <View style={styles.iconContainer}>
					<Image
						source={BathingIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
		},
		{
			title: 'Grooming',
			value: 'grooming',
			icon: <View style={styles.iconContainer}>
					<Image
						source={GroomingIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
		},
		{
			title: 'Dressing',
			value: 'dressing',
			icon: <View style={styles.iconContainer}>
					<Image
						source={DressingIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
		},
		{
			title: 'Feeding',
			value: 'feeding',
			icon: <View style={styles.iconContainer}>
					<Image
						source={FeedingIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
		},
		{
			title: 'Companionship',
			value: 'companionship',
			icon: <View style={styles.iconContainer}>
					<Image
						source={CompanionshipIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
		},
		{
			title: 'Driving',
			value: 'driving',
			icon: <View style={styles.iconContainer}>
					<Image
						source={DrivingIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
		},
		{
			title: 'Appointments',
			value: 'appointments',
			icon: <View style={styles.iconContainer}>
					<Image
						source={AppointmentIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
		},
		{
			title: 'Mobility',
			value: 'mobility',
			icon: <View style={styles.iconContainer}>
					<Image
						source={MobilityIcon}
						style={styles.icon}
						placeholderStyle={styles.placeholderIcon}
					/>
				</View>
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