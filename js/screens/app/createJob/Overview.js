import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Avatar, Button, Image, ListItem } from 'react-native-elements'
import { styles } from './styles'

const Overview = props => {
	const handleNextStep = () => {
		console.log('to be implemented')
	}

	const steps = [
		{
			title: 'Basic Information',
			value: 'BasicInformation',
		},
		{
			title: 'Service Details',
			value: 'ServiceDetails',
		},
		{
			title: 'Senior Details',
			value: 'SeniorDetails',
		},
		{
			title: 'House Details',
			value: 'HouseDetails',
		},
		{
			title: 'Caregiver Preferences',
			value: 'CaregiverPreferences',
		},
		
	]

	return (
		<>
			<SafeAreaView style={styles.backgroundBlue}>
				<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
				<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
					<View style={styles.introContainer}>
						<Text style={styles.title}>Let's create a job post</Text>
						<Text style={styles.description}>A great connection is important to finding a good fit. To help us find the best care for your loved one, we’ll ask a series of questions to understand your family’s needs.</Text>
					</View>
					<View style={styles.stepsContainer}>
						{steps.map((step, index) => (
							<View key={index} style={styles.stepContainer}>
								<Avatar
									size={35}
									title={`${index + 1}`}
									overlayContainerStyle={styles.stepNumberCircle}
									titleStyle={styles.stepNumber}
									rounded
								/>
								<Text style={styles.stepText}>{step.title}</Text>
							</View>
						))}
					</View>
				</ScrollView>
			</SafeAreaView>
			<Button
				title='Get started'
				buttonStyle={styles.submitButton}
				onPress={handleNextStep}
			/>
		</>
	)
}

export default Overview