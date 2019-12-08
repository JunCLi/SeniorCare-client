import React, { useState } from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_DETAILED } from '../../../../graphql/queries/jobQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { styles } from './styles'

import ButtonTab from '../../../../components/buttons/buttonTabs/ButtonTab'
import SeniorDetails from '../../../../components/jobDetails/seniorDetails/SeniorDetails'
import BasicInformation from '../../../../components/jobDetails/basicInformation/BasicInformation'
import ServiceDetails from '../../../../components/jobDetails/serviceDetails/ServiceDetails'
import HouseDetails from '../../../../components/jobDetails/houseDetails/HouseDetails'
import CaregiverPreference from '../../../../components/jobDetails/caregiverPreference/CaregiverPreference'

const Jobs = props => {
	const { jobId, title, defaultPage } = props.navigation.state.params
	const [ selectedButton, setSelectedButton ] = useState(defaultPage)
	const { loading, data } = useQuery(GET_JOB_DETAILED, {
		variables: {
			id: jobId
		}
	})
	// console.log('state params', props.navigation.state.params)
	console.log('data', data)

	const buttonArray = [
		{
			title: 'Overview',
			value: 'overview',
		},
		{
			title: 'Applicants',
			value: 'applicant',
		},
	]

	const handleSelectButton = value => {
		setSelectedButton(value)
	}

	if (loading) return (
		<SafeAreaView style={styles.background}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
			</ScrollView>
		</SafeAreaView>
	)

	return (
		<SafeAreaView style={styles.background}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				
				<ButtonTab
					buttonArray={buttonArray}
					selectedButton={selectedButton}
					handleSelectButton={handleSelectButton}
				/>

				<SeniorDetails {...data.getJob.seniorDetails} />

				<BasicInformation {...data.getJob.basicInformation} />

				<ServiceDetails {...data.getJob.serviceDetails} />

				<HouseDetails {...data.getJob.houseDetails} />

				<CaregiverPreference {...data.getJob.caregiverPreferences} />
			</ScrollView>
		</SafeAreaView>
	)
}

export default Jobs