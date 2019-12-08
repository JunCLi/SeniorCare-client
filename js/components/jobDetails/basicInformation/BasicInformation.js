import React, { useState } from 'react'
import moment from 'moment'

import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'

const BasicInformation = props => {
	const [ minimize, setMinimize ] = useState(false)

	const handleMinimize = () => {
		setMinimize(!minimize)
	}

	const formatDate = date => {
		return date ? moment(date).format('YYYY-MM-DD') : ''
	}

	return (
		<View>
			<TouchableOpacity 
				onPress={handleMinimize}
				style={styles.headerContainer}
			>
				<Text style={styles.headerText}>Basic Information</Text>
				<Icon
					type='entypo'
					name={minimize ? 'chevron-down' : 'chevron-up'}
					iconStyle={styles.chevronIcon}
				/>
			</TouchableOpacity>

			{ !minimize &&
				<View style={styles.mainContainer}>
					<SimpleLabelValue label={'Start date'} value={formatDate(props.startDate)} />

					<SimpleLabelValue label={'End date'} value={formatDate(props.endDate)} />
					
					<SimpleLabelValue label={'Hourly rate'} value={`$${props.hourlyRate}/hr`} />

					<View style={styles.labelValueContainer}>
						<View style={styles.labelContainer}>
							<Text style={styles.label}>Address</Text>
						</View>
						<View style={styles.valueContainer}>
							<Text style={styles.capitalizeValue}>{props.location.address}</Text>
							<Text style={styles.value}>{props.location.city}, {props.location.province}</Text>
							<Text style={styles.value}>{props.location.postalCode}</Text>
						</View>
					</View>
				</View>
			}
		</View>
	)
}

export default BasicInformation