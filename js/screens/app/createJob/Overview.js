import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_FORM } from '../../../graphql/queries/jobQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Button, Image, ListItem } from 'react-native-elements'
import { styles } from './styles'

const Overview = props => {
	const { data } = useQuery(GET_JOB_FORM)

	const handleTest = props => {
		console.log(data)
	}

	const handleNextStep = () => {
		// TODO SELECT NEXT STEP AS APPROPRIATE
		console.log('to be implemented')
	}

	const goToStep = destination => {
		props.navigation.navigate(destination)
	}

	const steps = [
		{
			title: 'Basic Information',
			value: 'basicInformation',
			path: 'BasicInformation',
		},
		{
			title: 'Service Details',
			value: 'serviceDetails',
			path: 'ServiceDetails',
		},
		{
			title: 'Senior Details',
			value: 'seniorDetails',
			path: 'SeniorDetails',
		},
		{
			title: 'House Details',
			value: 'houseDetails',
			path: 'HouseDetails',
		},
		{
			title: 'Caregiver Preferences',
			value: 'caregiverPreferences',
			path: 'CaregiverPreferences',
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
							<TouchableOpacity key={index} onPress={() => goToStep(step.path)}>
								<View style={styles.stepContainer}>
									<Avatar
										size={35}
										title={`${index + 1}`}
										overlayContainerStyle={styles.stepNumberCircle}
										titleStyle={styles.stepNumber}
										rounded
									/>
									<Text style={styles.stepText}>{step.title}</Text>
								</View>
							</TouchableOpacity>
						))}
					</View>

					<Button
						title='test'
						onPress={handleTest}
					/>
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