import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import { booleanToYesNo } from '../../../util/conversionTables/boolean'

const HouseDetails = props => {

	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>House Details</Text>
			</View>

			<View style={styles.mainContainer}>
				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Smoking</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{booleanToYesNo(props.cigarette)}</Text>
					</View>
				</View>

				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Pets</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{booleanToYesNo(props.pets)}</Text>
					</View>
				</View>

				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Cannabis</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{booleanToYesNo(props.cannabis)}</Text>
					</View>
				</View>
				
			</View>
		</View>
	)
}

export default HouseDetails