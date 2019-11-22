import React from 'react'

import { Text } from 'react-native'
import { styles } from './styles'

const RatingNumber = props => {
	const { averageRating } = props

	const round = (value, precision) => {
    const multiplier = Math.pow(10, precision || 0)
    return Math.round(value * multiplier) / multiplier
	}

	return (
		<Text style={styles(props).text}>{round(averageRating, 1)}</Text>
	)
}

export default RatingNumber