import React from 'react'

import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles, starStyles, dynamicStyles } from './styles'

const RatingStars = props => {
	const { averageRating, iconStyle = {} } = props

	const mapRatingToStars = rating => {
		const ratingArray = []
		for (let i = 0; i < 5; i++) {
			if (rating - i < 0.25) ratingArray.push('star-o')
			else if (rating - i < 0.75) ratingArray.push('star-half-empty')
			else ratingArray.push('star')
		}
		return ratingArray
	}

	return (
		<View style={styles.mainContainer}>
			{mapRatingToStars(averageRating).map((rating, index) => (
				<Icon
					key={index}
					type='font-awesome'
					name={rating}
					color={starStyles.colour}
					size={starStyles.size}
					iconStyle={dynamicStyles(iconStyle).icon}
				/>
			))}
		</View>
	)
}

export default RatingStars