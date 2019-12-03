import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'


const BasicInformation = props => {
	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Basic Information</Text>
			</View>

			<View style={styles.mainContainer}>
				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Start date</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{props.startDate}</Text>
					</View>
				</View>

				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>End date</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{props.endDate}</Text>
					</View>
				</View>

				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Hourly rate</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>${props.hourlyRate}/hr</Text>
					</View>
				</View>

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