import React, { useState } from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_DETAILED, GET_JOB_APPLICANTS } from '../../../../graphql/queries/jobQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { styles } from './styles'

import OrangeArc from '../../../../components/images/orangeArc/OrangeArc'
import ButtonTab from '../../../../components/buttons/buttonTabs/ButtonTab'
import Overview from './overview/Overview'
import Applicants from './applicants/Applicants'

const Jobs = props => {
	const { jobId, defaultPage } = props.navigation.state.params
	const [ selectedButton, setSelectedButton ] = useState(defaultPage)

	const { loading: loadingJob, data: dataJob } = useQuery(GET_JOB_DETAILED, {
		variables: {
			id: jobId
		}
	})

	const { loading: loadingApplicant, data: dataApplicant } = useQuery(GET_JOB_APPLICANTS, {
		variables: {
			jobId: jobId
		}
	})

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

	const displayRoute = buttonValue => {
		if (loadingJob || loadingApplicant) return (
			<View>
				<Text>loading...</Text>
			</View>
		)

		switch (buttonValue) {
			case 'applicant':
				return (
					<Applicants
						job={dataJob.getJob}
						applicants={dataApplicant.getApplicants}
						navigation={props.navigation}
					/>
				)
		
			default:
				return <Overview job={dataJob.getJob} navigation={props.navigation} />
		}
	}

	return (
		<SafeAreaView style={ selectedButton === 'applicant' ? styles.backgroundBlue : styles.background}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				
				<ButtonTab
					buttonArray={buttonArray}
					selectedButton={selectedButton}
					handleSelectButton={handleSelectButton}
				/>

				{ displayRoute(selectedButton)}
			</ScrollView>
		</SafeAreaView>
	)
}

export default Jobs