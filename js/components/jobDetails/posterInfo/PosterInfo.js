import React from 'react'
import moment from 'moment'

import { Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { styles } from './styles'

const PosterInfo = props => {
	const { user, jobTitle } = props

	const userDetails = userInfo => (
		<ListItem
			leftAvatar={
				<Avatar
					source={{ uri: userInfo.avatar }}
					placeholderStyle={styles.placeholderAvatar}
					rounded
				/>
			}
			title={`${userInfo.first_name} ${userInfo.last_name.substring(0, 1).toUpperCase()}.`}
			titleStyle={styles.title}
			subtitle={`Posted ${moment().format('ll')}`}
			subtitleStyle={styles.subTitle}
			containerStyle={styles.listItemContainer}
		/>
	)

	const placeholderUserDetails = (
		<ListItem
			leftAvatar={<Avatar rounded />}
			title='Firstname L.'
			titleStyle={styles.title}
			subtitle={`Posted ${moment().format('ll')}`}
			subtitleStyle={styles.subTitle}
			containerStyle={styles.listItemContainer}
		/>
	)

	return (
		<View style={styles.mainContainer}>
			{user === 'loading'
				? placeholderUserDetails
				: userDetails(user)
			}
			<Text style={styles.jobTitle}>{jobTitle}</Text>
		</View>
	)
}

export default PosterInfo