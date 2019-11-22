import React from 'react'

import { Text, View } from 'react-native'
import { Icon, Image, ListItem } from 'react-native-elements'
import { starStyles, styles } from './styles'

const CaregiverList = props => {
	const { userDetails, caregiverDetails } = props

	console.log('rating? ', caregiverDetails.average_rating)
		
	const mapRatingToStars = averageRating => {
		const ratingArray = []
		for (let i = 0; i < 5; i++) {
			console.log('star?', averageRating - i)
			if (averageRating - i < 0.25) ratingArray.push('star-o')
			else if (averageRating - i < 0.75) ratingArray.push('star-half-empty')
			else ratingArray.push('star')
		}
		return ratingArray
	}

	return (
		<View style={styles.mainContainer}>
			{/* <View style={styles.imageContainer}>

			</View> */}
			<Image
				source={{uri: userDetails.avatar}}
				style={styles.avatar}
			/>
			<View style={styles.detailsContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.name}>{userDetails.first_name} {userDetails.last_name}</Text>
				</View>

				<View style={styles.ratingsLocationContainer}>
					<View style={styles.ratingsContainer}>
						{/* {caregiverDetails.averageRating} */}
						{mapRatingToStars(caregiverDetails.average_rating).map((rating, index) => (
							<Icon
								key={index}
								type='font-awesome'
								name={rating}
								color={starStyles.colour}
								size={starStyles.size}
							/>
						))}
					</View>
				</View>
				
				<View style={styles.experienceRateContainer}> 
					<Text></Text>

				</View>

				<View style={styles.ageAvailabilityContainer}>
					

				</View>
			</View>
		</View>
	)
}

export default CaregiverList