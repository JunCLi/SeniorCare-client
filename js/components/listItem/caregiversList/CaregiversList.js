import React from 'react'
import moment from 'moment'

import { Text, TouchableOpacity, View } from 'react-native'
import { Icon, Image } from 'react-native-elements'
import { styles } from './styles'

import RatingStars from '../../ratings/ratingStars/RatingStars'
import RatingNumber from '../../ratings/ratingNumber/RatingNumber'

const CaregiverList = props => {
	const { user_id, userDetails, caregiverDetails } = props

	const calcAge = birthdate => {
		return moment().diff(moment(birthdate, 'YYYYMMDD'), 'years')
	}

	const goViewCaregiver = caregiver => {
		props.navigation.navigate('ViewCaregiver', {
			user_id: user_id,
			userDetails: userDetails,
			caregiverDetails: caregiverDetails,
		})
	}
	
	return (
		<TouchableOpacity
			onPress={() => goViewCaregiver(user_id)}
		>
			<View style={styles.mainContainer}>
				<Image
					source={{uri: userDetails.avatar}}
					style={styles.avatar}
					/>
				<View style={styles.infoContainer}>
					<View style={styles.nameContainer}>
						<Text style={styles.name}>{userDetails.first_name} {userDetails.last_name}</Text>
					</View>

					<View style={styles.ratingsLocationContainer}>
						<View style={styles.ratingsContainer}>
							<RatingStars averageRating={caregiverDetails.average_rating} />
							<RatingNumber averageRating={caregiverDetails.average_rating} />
						</View>
						<View style={styles.locationContainer}>
							<Text style={styles.location}>{userDetails.location}</Text>
						</View>
					</View>
					
					<View style={styles.outerDetailsContainer}> 
						<View style={styles.experienceContainer}>
							<Icon
								name='suitcase'
								type='font-awesome'
								iconStyle={styles.icon}
								/>
							<Text style={styles.details}>{caregiverDetails.years_experience} years experience</Text>
						</View>
						<View style={styles.rateContainer}>
							<Icon
								name='ios-timer'
								type='ionicon'
								iconStyle={styles.rateIcon}
								/>
							<Text style={styles.details}>From ${caregiverDetails.hourly_rate}/hour</Text>
						</View>
					</View>

					<View style={styles.outerDetailsContainer}>
						<View style={styles.ageContainer}>
							<Icon
								name='cake'
								type='material'
								iconStyle={styles.ageIcon}
								/>
							<Text style={styles.details}>{calcAge(caregiverDetails.birthdate)} years old</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default CaregiverList