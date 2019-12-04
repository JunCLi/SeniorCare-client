import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import { booleanToYesNo } from '../../../util/conversionTables/boolean'
import { availabilityConv, genderConv } from '../../../util/conversionTables/simpleEnums'

import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'

const CaregiverPreference = props => {

	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>House Details</Text>
			</View>

			<View style={styles.mainContainer}>

				<SimpleLabelValue label={'Availabilty'} value={availabilityConv[props.availability].title} />

				<SimpleLabelValue label={'Gender'} value={genderConv[props.genderPref].title} />

				<SimpleLabelValue label={'Driving license'} value={booleanToYesNo(props.drivingLicense)} />
				
			</View>
		</View>
	)
}

export default CaregiverPreference