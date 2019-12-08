import React, { useState } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

import { serviceConversions } from '../../../util/conversionTables/services'

const ServiceDetails = props => {
	const [ minimize, setMinimize ] = useState(false)

	const handleMinimize = () => {
		setMinimize(!minimize)
	}

	const servicesArray = [
		...(props.services ? props.services : []),
		...(props.householdNeeds ? props.householdNeeds : []),
	]

	return (
		<View>
			<TouchableOpacity 
				onPress={handleMinimize}
				style={styles.headerContainer}
			>
				<Text style={styles.headerText}>Service Details</Text>
				<Icon
					type='entypo'
					name={minimize ? 'chevron-down' : 'chevron-up'}
					iconStyle={styles.chevronIcon}
				/>
			</TouchableOpacity>

			{ !minimize &&
				<View style={styles.mainContainer}>
					{servicesArray.map(service => (
						<View key={service} style={styles.serviceContainer}>
							<Text style={styles.service}>{serviceConversions[service].title}</Text>
						</View>
					))}
				</View>
			}
		</View>
	)
}

export default ServiceDetails