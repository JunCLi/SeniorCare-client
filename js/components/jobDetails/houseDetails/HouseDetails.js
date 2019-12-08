import React, { useState } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

import { booleanToYesNo } from '../../../util/conversionTables/boolean'

import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'

const HouseDetails = props => {
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

					<SimpleLabelValue label={'Smoking'} value={booleanToYesNo(props.cigarette)} />

					<SimpleLabelValue label={'Pets'} value={booleanToYesNo(props.pets)} />

					<SimpleLabelValue label={'Cannabis'} value={booleanToYesNo(props.cannabis)} />
					
				</View>
			}
		</View>
	)
}

export default HouseDetails