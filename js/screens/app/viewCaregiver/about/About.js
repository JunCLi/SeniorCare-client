import React from 'react'
import moment from 'moment'

import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

import RatingStars from '../../../../components/ratings/ratingStars/RatingStars'
import RatingNumber from '../../../../components/ratings/ratingNumber/RatingNumber'

const About = props => {
	const { userId, userDetails, caregiverDetails } = props

	const calcAge = birthdate => {
		return moment().diff(moment(birthdate, 'YYYYMMDD'), 'years')
	}

	return (
		<View style={styles.aboutContainer}>
			<View style={styles.detailsContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.name}>{userDetails.firstName} {userDetails.lastName}</Text>
				</View>

				<View style={styles.ratingsLocationContainer}>
					<View style={styles.ratingsContainer}>
						<RatingStars 
							averageRating={caregiverDetails.averageRating}
							iconStyle={styles.ratingsIcon}
						/>
						<RatingNumber averageRating={caregiverDetails.averageRating} />
					</View>
					<View>
						<Text style={styles.location}>{userDetails.location}</Text>
					</View>
				</View>

				<View style={styles.lowerDetailsOuterContainer}> 
					<View style={styles.lowerDetailsInnerContainer}>
						<Icon
							name='cake'
							type='material'
							iconStyle={styles.ageIcon}
							/>
						<Text style={styles.details}>{calcAge(caregiverDetails.birthdate)} years old</Text>
					</View>

					<View style={styles.lowerDetailsInnerContainer}>
						<Icon
							name='suitcase'
							type='font-awesome'
							iconStyle={styles.icon}
							/>
						<Text style={styles.details}>{caregiverDetails.yearsExperience} years experience</Text>
					</View>
					
					<View style={styles.lowerDetailsInnerContainer}>
						<Icon
							name='ios-timer'
							type='ionicon'
							iconStyle={styles.rateIcon}
							/>
						<Text style={styles.details}>From ${caregiverDetails.hourlyRate}/hour</Text>
					</View>
				</View>
			</View>
			<View style={styles.aboutMeContainer}>
				<Text style={styles.aboutMeTitle}>About Me</Text>
				<Text style={styles.aboutMe}>{caregiverDetails.description}</Text>
			</View>
		</View>
	)
}

export default About