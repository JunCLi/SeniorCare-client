import React from 'react'

import { View } from 'react-native'
import { Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArcImage from '../../../assets/images/orange-arc.png'

export const OrangeArc = () => {
	return (
		<View style={styles.orangeArcContainer}>
			<Image
				source={OrangeArcImage}
				style={styles.orangeArc}
				placeholderStyle={styles.placeholder}
				// resizeMethod='resize'
			/>
		</View>
	)
}

export default OrangeArc