import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import { booleanToYesNo } from '../../../util/conversionTables/boolean'

import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'

const HouseDetails = props => {

	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>House Details</Text>
			</View>

			<View style={styles.mainContainer}>

				<SimpleLabelValue label={'Smoking'} value={booleanToYesNo(props.cigarette)} />

				<SimpleLabelValue label={'Pets'} value={booleanToYesNo(props.pets)} />

				<SimpleLabelValue label={'Cannabis'} value={booleanToYesNo(props.cannabis)} />
				
			</View>
		</View>
	)
}

export default HouseDetails