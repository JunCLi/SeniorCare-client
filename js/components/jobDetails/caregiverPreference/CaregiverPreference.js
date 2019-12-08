import React, { useState } from 'react'

import { View } from 'react-native'
import { styles } from './styles'

import { booleanToYesNo } from '../../../util/conversionTables/boolean'
import { availabilityConv, genderConv } from '../../../util/conversionTables/simpleEnums'

import Header from '../header/Header'
import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'

const CaregiverPreference = props => {
	const [ minimize, setMinimize ] = useState(false)

	const handleMinimize = () => {
		setMinimize(!minimize)
	}

	return (
		<View>
			<Header
				title='Caregiver Preferences'
				minimize={minimize}
				handleMinimize={handleMinimize}
			/>

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