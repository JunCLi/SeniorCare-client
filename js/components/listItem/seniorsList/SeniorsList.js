import React from 'react'

import { Text, View } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements'
import { icon, styles } from './styles'

import { calcAge } from '../../../util/helperFunctions/calc'

const SeniorsList = props => {
	const { senior, handleSelect } = props

	return (
		<ListItem
			leftAvatar={
				<Avatar
					source={senior.picture ? {uri: senior.picture} : null}
					size='large'
					title={senior.name.substring(0, 3)}
					rounded
				/>
			}
			title={`${senior.name}, ${calcAge(senior.birthdate)}`}
			titleStyle={styles.title}
			rightIcon={
				<Icon
					type='entypo'
					name='chevron-right'
					color={icon.color}
				/>
			}
			subtitle={senior.relation}
			subtitleStyle={styles.subtitle}
			containerStyle={styles.container}
			onPress={() => handleSelect(senior)}
		/>
	)
}

export default SeniorsList