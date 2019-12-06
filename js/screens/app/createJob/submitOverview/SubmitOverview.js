import React from 'react'

import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_JOB_FORM, SUBMIT_JOB_POST } from '../../../../graphql/queries/jobQueries'
import { GET_LOGGED_USER_BASIC_WITH_AVATAR } from '../../../../graphql/queries/authQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

import PosterInfo from '../../../../components/jobDetails/posterInfo/PosterInfo'
import BasicInformation from '../../../../components/jobDetails/basicInformation/BasicInformation'
import ServiceDetails from '../../../../components/jobDetails/serviceDetails/ServiceDetails'
import SeniorDetails from '../../../../components/jobDetails/seniorDetails/SeniorDetails'
import HouseDetails from '../../../../components/jobDetails/houseDetails/HouseDetails'
import CaregiverPreference from '../../../../components/jobDetails/caregiverPreference/CaregiverPreference'


const SubmitOverview = props => {
	const { data: formData } = useQuery(GET_JOB_FORM)
	const { data: userData } = useQuery(GET_LOGGED_USER_BASIC_WITH_AVATAR)
	const { basicInformation, serviceDetails, seniorDetails, houseDetails, caregiverPreferences } = formData.getJobForm
	const [ submitJobPost ] = useMutation(SUBMIT_JOB_POST)

	const user = userData ? userData.getLoggedUser : 'loading'

	const handlePostJob = async () => {
		const { __typename: binfoTypename, ...basicInformationInput } = basicInformation
		const { __typename: locationTypename, ...locationInput } = basicInformation.location
		const { __typename: serviceTypename, ...serviceDetailsInput } = serviceDetails
		const { __typename: seniorTypename, ...seniorDetailsInput } = seniorDetails
		const { __typename: houseTypename, ...houseDetailsInput } = houseDetails
		const { __typename: careTypename, ...caregiverPreferencesInput } = caregiverPreferences

		console.log('senior details', seniorDetails)

		const result = await submitJobPost({ 
			variables: {input: {
				basicInformation: {
					...basicInformationInput,
					location: locationInput,
				},
				serviceDetails: serviceDetailsInput,
				seniorDetails: seniorDetailsInput,
				houseDetails: houseDetailsInput,
				caregiverPreferences: caregiverPreferencesInput,
			}}
		})
	}

	return (
		<>
		<SafeAreaView style={styles.background}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				<PosterInfo user={user} jobTitle={basicInformation.title} />
				
				<BasicInformation {...basicInformation} />

				<ServiceDetails {...serviceDetails} />

				<SeniorDetails {...seniorDetails} />

				<HouseDetails {...houseDetails} />

				<CaregiverPreference {...caregiverPreferences} /> 
			</ScrollView>
		</SafeAreaView>
		<Button
			title='Post Job'
			onPress={handlePostJob}
			buttonStyle={styles.submitButton}
			titleStyle={styles.submitButtonText}
		/>
	</>
	)
}

export default SubmitOverview