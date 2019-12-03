import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import { booleanToYesNo } from '../../../util/conversionTables/boolean'
import { availabilityConv, genderConv } from '../../../util/conversionTables/simpleEnums'

const CaregiverPreference = props => {

	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>House Details</Text>
			</View>

			<View style={styles.mainContainer}>
				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Availabilty</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{availabilityConv[props.availability].title}</Text>
					</View>
				</View>

				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Gender</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{genderConv[props.gender].title}</Text>
					</View>
				</View>

				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Driving license</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{booleanToYesNo(props.drivingLicense)}</Text>
					</View>
				</View>
				
			</View>
		</View>
	)
}

export default CaregiverPreference