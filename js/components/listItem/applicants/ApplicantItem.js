import React from 'react'

import { Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'
import { styles } from './styles'

import RatingStars from '../../ratings/ratingStars/RatingStars'
import RatingNumber from '../../ratings/ratingNumber/RatingNumber'

const ApplicantItem = props => {
	const { userId, userDetails, caregiverDetails, handleMessage, handleViewCaregiver } = props

	return (
		<TouchableOpacity
			style={styles.mainContainer}
			onPress={() => handleViewCaregiver(userId, userDetails, caregiverDetails)}
		>
			<View style={styles.avatarContainer}>
				<Image
					source={{ uri: userDetails.avatar }}
					style={styles.avatar}
					placeholderStyle={styles.placeholder}
					resizeMode='cover'
				/>
			</View>

			<View style={styles.detailsContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.name}>{userDetails.firstName} {userDetails.lastName}</Text>
				</View>

				<View style={styles.container}>
					<View style={styles.ratingsContainer}>
						<RatingStars averageRating={caregiverDetails.averageRating} />
						<RatingNumber averageRating={caregiverDetails.averageRating} />
					</View>
					<View style={styles.locationContainer}>
						<Text style={styles.location}>{userDetails.location}</Text>
					</View>
				</View>

				<View style={styles.container}>
					<View style={styles.experienceContainer}>
						<Icon
							name='suitcase'
							type='font-awesome'
							iconStyle={styles.icon}
						/>
						<Text style={styles.detailsText}>{caregiverDetails.yearsExperience} years experience</Text>
					</View>
					<View style={styles.rateContainer}>
						<Icon
							name='ios-timer'
							type='ionicon'
							iconStyle={styles.rateIcon}
						/>
						<Text style={styles.detailsText}>From ${caregiverDetails.hourlyRate}/hour</Text>
					</View>
				</View>

				<Button
					title='Message'
					onPress={() => handleMessage(userId)}
					titleStyle={styles.buttonText}
					buttonStyle={styles.button}
				/>
			</View>
		</TouchableOpacity>
	)
}

export default ApplicantItem