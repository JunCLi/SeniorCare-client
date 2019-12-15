import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_DETAILED } from '../../../../graphql/queries/jobQueries'

import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { styles } from './styles'

import JobDetails from '../../../../components/jobDetails/JobDetails'
import OrangeArc from '../../../../components/images/orangeArc/OrangeArc'

const ViewJob = props => {
	const { jobId, name, user } = props.navigation.state.params
	const { data: jobData } = useQuery(GET_JOB_DETAILED, {
		variables: {
			id: jobId
		}
	})

	return (
		<View style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle={'dark-content'} />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				{jobData &&
					<JobDetails
						job={jobData.getJob}
						name={name}
						user={user}
					/>
				}

			</ScrollView>
		</View>
	)
}

export default ViewJob