import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_FORM } from '../../../../graphql/queries/jobQueries'
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

	const user = userData ? userData.getLoggedUser : 'loading'

	console.log('formData ', formData)
	console.log('userData ', userData)


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
			onPress={() => console.log('submit')}
			buttonStyle={styles.submitButton}
			titleStyle={styles.submitButtonText}
		/>
	</>
	)
}

export default SubmitOverview