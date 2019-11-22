import React from 'react'

import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import { styles } from './styles'

import InfoScreeningIcon from '../../../../assets/images/info-screening-3x.png'

const InfoSlides = props => {
	return (
		<View style={styles.topContainer}>

			<View style={styles.iconOuterContainer}>
				<View style={styles.iconInnerContainer}>
					<Image
						source={InfoScreeningIcon}
						style={styles.infoScreeningLogo}
					/>
				</View>
			</View>

			<View style={styles.infoContainer}>
				<View style={styles.textContainer}>
					<Text style={styles.title}>Pre-Screened</Text>
					<Text style={styles.title}>Caregivers</Text>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.infoText}>No caregiver is listed on our marketplace until proof of qualifications and background checks are verified</Text>
				</View>
			</View>

		</View>
	)
}

export default InfoSlides