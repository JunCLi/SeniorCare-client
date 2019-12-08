import React, { useState } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

import { booleanToYesNo } from '../../../util/conversionTables/boolean'
import { availabilityConv, genderConv } from '../../../util/conversionTables/simpleEnums'

import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'

const CaregiverPreference = props => {
	const [ minimize, setMinimize ] = useState(false)

	const handleMinimize = () => {
		setMinimize(!minimize)
	}

	return (
		<View>
			<TouchableOpacity 
				onPress={handleMinimize}
				style={styles.headerContainer}
			>
				<Text style={styles.headerText}>House Details</Text>
				<Icon
					type='entypo'
					name={minimize ? 'chevron-down' : 'chevron-up'}
					iconStyle={styles.chevronIcon}
				/>
			</TouchableOpacity>

			{ !minimize &&
				<View style={styles.mainContainer}>

					<SimpleLabelValue label={'Availabilty'} value={availabilityConv[props.availability].title} />

					<SimpleLabelValue label={'Gender'} value={genderConv[props.genderPref].title} />

					<SimpleLabelValue label={'Driving license'} value={booleanToYesNo(props.drivingLicense)} />
					
				</View>
			}
		</View>
	)
}

export default CaregiverPreference