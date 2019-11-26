import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Avatar, Button, Image, ListItem } from 'react-native-elements'
import { styles } from './styles'

import StepCounter from '../formPosition/FormPosition'

const BasicInformation = props => {
	return (
		<>
			<SafeAreaView style={styles.backgroundBlue}>
				<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
				<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
					<StepCounter
						title='Basic Information'
						totalSteps={4}
						currentStep={1}
					/>


				</ScrollView>
			</SafeAreaView>
		</>
	)
}

export default BasicInformation