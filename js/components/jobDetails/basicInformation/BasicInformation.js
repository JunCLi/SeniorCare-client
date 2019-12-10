import React, { useState } from 'react'
import moment from 'moment'

import { Text, View } from 'react-native'
import { styles } from './styles'

import Header from '../../header/collapsable/Header'
import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'
import MultiLabelValue from '../../labelValue/multiValue/LabelValue'

const BasicInformation = props => {
	const [ minimize, setMinimize ] = useState(false)

	const locationArray = [
		props.location.address,
		`${props.location.city}, ${props.location.province}`,
		props.location.postalCode,
	]

	const handleMinimize = () => {
		setMinimize(!minimize)
	}

	const formatDate = date => {
		return date ? moment(date).format('YYYY-MM-DD') : ''
	}

	return (
		<View>
			<Header
				title='Basic Information'
				minimize={minimize}
				handleMinimize={handleMinimize}
			/>

			{ !minimize &&
				<View style={styles.mainContainer}>
					<SimpleLabelValue label={'Start date'} value={formatDate(props.startDate)} />

					<SimpleLabelValue label={'End date'} value={formatDate(props.endDate)} />
					
					<SimpleLabelValue label={'Hourly rate'} value={`$${props.hourlyRate}/hr`} />

					<MultiLabelValue
						label={'Address'}
						valueArray={locationArray}
						capitalize
					/>
				</View>
			}
		</View>
	)
}

export default BasicInformation