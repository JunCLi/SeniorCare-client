import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import { calcAge } from '../../../util/helperFunctions/calc'
import { genderConv } from '../../../util/conversionTables/simpleEnums'

import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'

const SeniorDetails = props => {
	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Senior Details</Text>
			</View>

			<View style={styles.mainContainer}>

				<SimpleLabelValue label={'Gender'} value={genderConv[props.gender].title} />

				<SimpleLabelValue label={'Age'} value={`${calcAge(props.birthdate)} years old`} />

				<SimpleLabelValue label={'Relationship'} value={props.relation} />

				<SimpleLabelValue label={'Language'} value={props.language.join(', ')} />

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