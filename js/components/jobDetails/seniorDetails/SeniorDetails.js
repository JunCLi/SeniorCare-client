import React, { useState } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements'
import { styles } from './styles'

import { calcAge } from '../../../util/helperFunctions/calc'
import { genderConv } from '../../../util/conversionTables/simpleEnums'

import SimpleLabelValue from '../../labelValue/simple/SimpleLabelValue'

const SeniorDetails = props => {
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
				<Text style={styles.headerText}>Senior Details</Text>
				<Icon
					type='entypo'
					name={minimize ? 'chevron-down' : 'chevron-up'}
					iconStyle={styles.chevronIcon}
				/>
			</TouchableOpacity>

			{ !minimize	&&
				<View style={styles.mainContainer}>
					<ListItem
						leftAvatar={
							<Avatar
								source={props.picture ? { uri: props.picture } : null}
								title={props.name.substring(0, 3)}
								placeholderStyle={styles.placeholderAvatar}
								rounded
							/>
						}
						title={props.name}
						titleStyle={styles.name}
						containerStyle={styles.listItemContainer}
					/>

					<SimpleLabelValue label={'Gender'} value={genderConv[props.gender].title} />

					<SimpleLabelValue label={'Age'} value={`${calcAge(props.birthdate)} years old`} />

					<SimpleLabelValue label={'Relationship'} value={props.relation} />

					<SimpleLabelValue label={'Language'} value={props.language.join(', ')} capitalize={true} />

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
			}
		</View>
	)
}

export default SeniorDetails