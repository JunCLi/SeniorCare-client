import React, { useState, useEffect } from 'react'

import { SafeAreaView, StatusBar, ScrollView, View, Text } from 'react-native'
import { Button, Slider } from 'react-native-elements'
import { styles } from './styles'

import HourlyRate from './hourlyRate/HourlyRate'
import YearsExperience from './yearsExperience/YearsExperience'
import Gender from './gender/Gender'
import Availability from './availability/Availability'

const FilterFind = props => {
	const clear =  props.navigation.getParam('clear')

	const [ gender, setGender ] = useState('')
	const [ availability, setAvailability ] = useState('')
	const [ hourlyRate, setHourlyRate ] = useState({
		value: 20,
		max: 75,
		min: 14,
	})
	const [ yearsExperience, setYearsExperience ] = useState({
		value: 5,
		max: 20,
		min: 0,
	})

	const resetDefault = () => {
		setGender('')
		setAvailability('')
		setHourlyRate({
			value: 20,
			max: 75,
			min: 14,
		})
		setYearsExperience({
			value: 5,
			max: 20,
			min: 0,
		})
	}

	useEffect(() => {
		if (clear) {
			resetDefault()
			props.navigation.setParams({clear: false})
		}
	}, [clear])

	return (
		<>
			<SafeAreaView style={styles.backgroundBlue}>
				<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
				<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
					<Gender
						gender={gender}
						setGender={setGender}
					/>
					
					<Availability
						availability={availability}
						setAvailability={setAvailability}
					/>

					<HourlyRate
						hourlyRate={hourlyRate}
						setHourlyRate={setHourlyRate}
					/>
					<YearsExperience
						yearsExperience={yearsExperience}
						setYearsExperience={setYearsExperience}
					/>

				</ScrollView>
			</SafeAreaView>

			<View>
				<Button
					title='See Results'
					buttonStyle={styles.submitButton}
					// onPress={handleSubmit}
					// disabled={isSubmitting}
					// disabledStyle={styles.submitDisabled}
					// disabledTitleStyle={styles.submitDisabledText}
				/>
			</View>
		</>
	)
}

FilterFind.navigationOptions = screenProps => {
	const handleChangeClear = () => {
		screenProps.navigation.setParams({clear: true})
	}

	return {
		headerRight: <Button
			title='Clear All'
			buttonStyle={styles.clearAllButton}
			titleStyle={styles.clearAllTitle}
			onPress={handleChangeClear}
		/>
	}
}

export default FilterFind