import React, { useState } from 'react'

import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_JOB_DETAILED, APPLY_JOB } from '../../../../../graphql/queries/jobQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Image, Input } from 'react-native-elements'
import Modal from 'react-native-modal'
import { styles } from './styles'


import OrangeArc from '../../../../../components/images/orangeArc/OrangeArc'
import ApplyJob from '../../../../../components/modal/applyJob/ApplyJob'

import PosterInfo from '../../../../../components/jobDetails/posterInfo/PosterInfo'
import SeniorDetails from '../../../../../components/jobDetails/seniorDetails/SeniorDetails'
import BasicInformation from '../../../../../components/jobDetails/basicInformation/BasicInformation'
import ServiceDetails from '../../../../../components/jobDetails/serviceDetails/ServiceDetails'
import HouseDetails from '../../../../../components/jobDetails/houseDetails/HouseDetails'
import CaregiverPreference from '../../../../../components/jobDetails/caregiverPreference/CaregiverPreference'

const ViewJob = props => {
	const { jobId, user, name } = props.navigation.state.params
	const { loading, data: jobData } = useQuery(GET_JOB_DETAILED, {
		variables: {
			id: jobId
		}
	})
	const [ applyJob ] = useMutation(APPLY_JOB)
	const [ modalVisible, setModalVisible ] = useState(false)
	const [ message, setMessage ] = useState('')

	const handleShowModal = () => {
		setModalVisible(!modalVisible)

	}

	const handleApplyJob = async () => {
		try {
			await applyJob({
				variables: {input: {
					jobId: jobId,
					familyId: user.userId,
					message: message,
				}}
			})
			setModalVisible(false)
			props.navigation.navigate('ApplicationSentScreen')
		} catch(err) {
			throw err
		}
	}

	if (loading) return (
		<>
		</>
	)

	return (
		<View style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />

			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
		
				<ApplyJob
					modalVisible={modalVisible}
					handleShowModal={handleShowModal}
					message={message}
					setMessage={setMessage}
					handlePress={handleApplyJob}
				/>

				<PosterInfo jobTitle={name} user={user} />

				<SeniorDetails {...jobData.getJob.seniorDetails} />

				<BasicInformation {...jobData.getJob.basicInformation} />

				<ServiceDetails {...jobData.getJob.serviceDetails} />

				<HouseDetails {...jobData.getJob.houseDetails} />

				<CaregiverPreference {...jobData.getJob.caregiverPreferences} />
			</ScrollView>

			<Button
				title='Apply'
				onPress={handleShowModal}
				buttonStyle={styles.submitButton}
				titleStyle={styles.submitButtonText}
			/>

		</View>
	)
}

export default ViewJob