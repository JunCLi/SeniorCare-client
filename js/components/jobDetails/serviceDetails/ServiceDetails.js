import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import { serviceConversions } from '../../../util/conversionTables/services'

const ServiceDetails = props => {

	const servicesArray = [
		...props.services,
		...props.householdNeeds,
	]

	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Service Details</Text>
			</View>

			<View style={styles.mainContainer}>
				{servicesArray.map(service => (
					<View key={service} style={styles.serviceContainer}>
						<Text style={styles.service}>{serviceConversions[service].title}</Text>
					</View>
				))}
			</View>
		</View>
	)
}

export default ServiceDetails