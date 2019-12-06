import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/singleWide/BlueWhiteButton'

const SelectSenior = props => {
	const buttonArray = [
		{
			title: 'Create new profile',
			value: 'SeniorDetails',
		},
		{
			title: 'Use existing profile',
			value: 'ChooseSenior',
		}
	]

	const handleSelect = value => {
		props.navigation.navigate(value)
	}

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				<View>
					<View style={styles.questionContainer}>
						<Text style={styles.question}>Senior's Profile</Text>
					</View>

					<View style={styles.buttonContainer}>
						<BlueWhiteButtons
							buttonArray={buttonArray}
							handleSelect={handleSelect}
						/>
					</View>

				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SelectSenior