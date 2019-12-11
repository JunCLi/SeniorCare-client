import React from 'react'

import { Text, View } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements'
import { styles } from './styles'

const Conversation = props => {
	const { handlePress } = props
	const { avatar, firstName, lastName } = props.recipient

	return (
		<ListItem
			title={`${firstName} ${lastName}`}
			subtitle='some job'
			leftAvatar={
				<Avatar
					source={{ uri: avatar }}
					avatarStyle={styles.avatar}
					containerStyle={styles.avatar}
				/>
			}
			rightIcon={
				<Icon
					type='entypo'
					name='chevron-right'
					iconStyle={styles.icon}
				/>
			}
			titleStyle={styles.title}
			subtitleStyle={styles.subtitle}
			containerStyle={styles.container}
			onPress={handlePress}
		/>
	)
}

export default Conversation