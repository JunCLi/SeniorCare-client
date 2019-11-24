import React, { useState, useEffect } from 'react'

import { useMutation, useQuery } from '@apollo/react-hooks'
import { SAVE_CAREGIVER_FILTER, GET_CAREGIVER_FILTER } from '../../../../graphql/queries/caregiverQueries'

import { SafeAreaView, StatusBar, ScrollView, View, Text } from 'react-native'
import { Button, Slider } from 'react-native-elements'
import { styles } from './styles'

import HourlyRate from './hourlyRate/HourlyRate'
import YearsExperience from './yearsExperience/YearsExperience'
import Gender from './gender/Gender'
import Availability from './availability/Availability'

const FilterFind = props => {
	const clear =  props.navigation.getParam('clear')
	const [ saveCaregiverFilter ] = useMutation(SAVE_CAREGIVER_FILTER)
	const { data } = useQuery(GET_CAREGIVER_FILTER)
	const defaultCaregiverFilter = data.getCaregiverFilter

	const [ gender, setGender ] = useState(defaultCaregiverFilter.gender)
	const [ availability, setAvailability ] = useState(defaultCaregiverFilter.availability)
	const [ hourlyRate, setHourlyRate ] = useState(defaultCaregiverFilter.hourlyRate)
	const [ yearsExperience, setYearsExperience ] = useState(defaultCaregiverFilter.yearsExperience)

	const handleSubmit = () => {
		saveCaregiverFilter({
			variables: {input: {
				gender: gender,
				availability: availability,
				hourlyRate: Math.round(hourlyRate),
				yearsExperience: Math.round(yearsExperience),
			}}
		})

		props.navigation.navigate('Find')
	}

	const resetDefault = () => {
		setGender('')
		setAvailability('')
		setHourlyRate(75)
		setYearsExperience(0)
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
					onPress={handleSubmit}
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