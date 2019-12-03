import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import { calcAge } from '../../../util/helperFunctions/calc'

const SeniorDetails = props => {
	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Senior Details</Text>
			</View>

			<View style={styles.mainContainer}>
				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Gender</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{props.gender}</Text>
					</View>
				</View>

				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Age</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{calcAge(props.birthdate)} years old</Text>
					</View>
				</View>

				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Relationship</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{props.relation}</Text>
					</View>
				</View>

				<View style={styles.labelValueContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Language</Text>
					</View>
					<View style={styles.valueContainer}>
						 <Text style={styles.value}>{props.language.join(', ')}</Text>
					</View>
				</View>

				<View style={styles.stackedContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Bio</Text>
					</View>
					<View style={styles.valueContainer}>
						 <Text style={styles.value}>{props.bio}</Text>
					</View>
				</View>

				<View style={styles.stackedContainer}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>Medical Condition</Text>
					</View>
					<View style={styles.valueContainer}>
						 <Text style={styles.value}>{props.medicalConditions}</Text>
					</View>
				</View>
				
			</View>
		</View>
	)
}

export default SeniorDetails