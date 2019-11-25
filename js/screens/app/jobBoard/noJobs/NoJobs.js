import React from 'react'

import { Text, View } from 'react-native'
import { Button, Image } from 'react-native-elements'
import { styles } from './styles'

import NoJobsImg from '../../../../assets/images/noJobs-jobsDashboard-3x.png'

const NoJobs = props => {
	const handleButton = () => {
		console.log('to be implemented')
		// props.navigation.navigate('')
	}

	return (
		<>
			<View style={styles.imageContainer}>
				<Image
					source={NoJobsImg}
					style={styles.image}
				/>
			</View>
			<View style={styles.CTAcontainer}>
				<Text style={styles.CTAmessage}>There are no jobs created under your account yet.</Text>
				<Button
					title='Create job post'
					onPress={handleButton}
					buttonStyle={styles.button}
					titleStyle={styles.buttonText}
					/>
			</View>
		</>
	)
}

export default NoJobs