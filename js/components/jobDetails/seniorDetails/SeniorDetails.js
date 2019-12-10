import React, { useState } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements'
import { styles } from './styles'

import { calcAge } from '../../../util/helperFunctions/calc'
import { genderConv } from '../../../util/conversionTables/simpleEnums'

import Header from '../../header/collapsable/Header'
import SeniorAvatar from './seniorAvatar/SeniorAvatar'
import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'
import StackedLabelValue from '../../labelValue/stacked/StackedLabelValue'

const SeniorDetails = props => {
	const { avatarPosition } = props
	const [ minimize, setMinimize ] = useState(false)

	const handleMinimize = () => {
		setMinimize(!minimize)
	}

	const seniorAvatarComponent = (
		<SeniorAvatar
			name={props.name}
			picture={props.picture}
			avatarPosition={avatarPosition}
		/>
	)

	return (
		<View>
			{ avatarPosition === 'aboveHeader' && seniorAvatarComponent	}

			<Header
				title='Senior Details'
				minimize={minimize}
				handleMinimize={handleMinimize}
			/>

			{ !minimize	&&
				<View style={styles.mainContainer}>
					{	avatarPosition !== 'aboveHeader' && seniorAvatarComponent	}

					<SimpleLabelValue label={'Gender'} value={genderConv[props.gender].title} />

					<SimpleLabelValue label={'Age'} value={`${calcAge(props.birthdate)} years old`} />

					<SimpleLabelValue label={'Relationship'} value={props.relation} />

					<SimpleLabelValue label={'Language'} value={props.language.join(', ')} capitalize={true} />

					<StackedLabelValue label={'Bio'} value={props.bio} />

					<StackedLabelValue label={'Medical Condition'} value={props.medicalConditions} />
					
				</View>
			}
		</View>
	)
}

export default SeniorDetails