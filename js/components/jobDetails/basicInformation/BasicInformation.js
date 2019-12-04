import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'

const BasicInformation = props => {
	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Basic Information</Text>
			</View>

			<View style={styles.mainContainer}>
				<SimpleLabelValue label={'Start date'} value={props.startDate} />

				<SimpleLabelValue label={'End date'} value={props.endDate} />
				
				<SimpleLabelValue label={'Hourly rate'} value={`$${props.hourlyRate}/hr`} />

				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Address</Text>
					</View>
					<View style={styles.valueContainer}>
						 <Text style={styles.value}>{props.location.address}</Text>
						 <Text style={styles.value}>{props.location.city}, {props.location.province}</Text>
						 <Text style={styles.value}>{props.location.postalCode}</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

export default BasicInformation