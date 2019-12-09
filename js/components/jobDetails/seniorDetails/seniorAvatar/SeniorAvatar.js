import React from 'react'

import { Avatar, ListItem } from 'react-native-elements'
import { styles, dynamicStyles } from './styles'

const SeniorAvatar = props => {
	const { name, picture, avatarPosition } = props

	return (
		<ListItem
			leftAvatar={
				<Avatar
					source={picture ? { uri: picture } : null}
					title={name.substring(0, 3)}
					placeholderStyle={styles.placeholderAvatar}
					rounded
				/>
			}
			title={name}
			titleStyle={styles.name}
			containerStyle={dynamicStyles(avatarPosition).listItemContainer}
		/>
	)
}

export default SeniorAvatar