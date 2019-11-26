import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Avatar, Button, Image, ListItem } from 'react-native-elements'
import { styles } from './styles'

const FormPosition = props => {
	const { title, totalSteps, currentStep } = props

	const createStepCounter = () => {
		const stepsArray = []
		for (let i = 1; i <= totalSteps; i++) {
			stepsArray.push({
				number: i,
				completed: i <= currentStep,
			})
		}
		return stepsArray
	}

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.stepsContainer}>
				{createStepCounter(totalSteps).map(step => (
					<View key={step.number} style={styles.singleStepContainer}>
						<Avatar
							size={22}
							title={`${step.number}`}
							overlayContainerStyle={step.completed
								? styles.completedStepNumberCircle
								: styles.stepNumberCircle}
							titleStyle={step.completed
								? styles.completedStepNumber
								: styles.stepNumber}
							rounded
						/>
					</View>
				))}
			</View>
		</View>
	)
}

export default FormPosition