import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button, Image } from 'react-native-elements'
import { styles } from './styles'

import JobPostedImage from '../../../../assets/images/jobPosted-3x.png'
import OrangeArc from '../../../../components/images/orangeArc/OrangeArc'

const JobCreated = props => {
	const handleButtonPress = () => {
		props.navigation.navigate('JobBoard')
	}
	
	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				<View style={styles.imageContainer}>
					<Image
						source={JobPostedImage}
						style={styles.image}
					/>
				</View>
				
				<Text style={styles.title}>Your Job is Posted!</Text>

				<View style={styles.descriptionContainer}>
					<Text style={styles.description}>Thanks for completing the job form. Your job post can now be seen by qualified caregivers.</Text>
				</View>

				<Button
					title='Go back to job dashboard'
					onPress={handleButtonPress}
					buttonStyle={styles.button}
					titleStyle={styles.buttonText}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default JobCreated