import React, { useState } from 'react'

import { View } from 'react-native'
import { styles } from './styles'

import { booleanToYesNo } from '../../../util/conversionTables/boolean'

import Header from '../header/Header'
import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'

const HouseDetails = props => {
	const [ minimize, setMinimize ] = useState(false)

	const handleMinimize = () => {
		setMinimize(!minimize)
	}

	return (
		<View>
			<Header
				title='House Details'
				minimize={minimize}
				handleMinimize={handleMinimize}
			/>

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