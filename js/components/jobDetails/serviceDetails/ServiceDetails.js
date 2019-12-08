import React, { useState } from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import Header from '../header/Header'
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
			<Header
				title='Service details'
				minimize={minimize}
				handleMinimize={handleMinimize}
			/>

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