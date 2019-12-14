import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_JOBS } from '../../../../graphql/queries/jobQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../../components/images/orangeArc/OrangeArc'
import AllJobs from '../../../../components/listItem/allJobs/AllJobs'

const FindJob = props => {
	const { data: jobs } = useQuery(GET_ALL_JOBS)

	const handleViewJob = (jobId, jobName, user) => {
		jobName = jobName ? jobName : 'Job Post'
		jobName = jobName.length > 25 ? `${jobName.substring(0, 20)}...` : jobName
		props.navigation.navigate('ViewJob', {
			jobId,
			name: jobName,
			user,
		})
	}

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				{	jobs && jobs.getAllJobs.map(job => (
					<AllJobs
						key={job.jobDetails.id}
						{...job}
						handlePress={handleViewJob}
					/>
				))}
				<View style={styles.extraSpace}></View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default FindJob

// FindJob.navigationOptions = screenProps => ({
// 	headerRight: <Icon
// 		name='ios-options'
// 		type='ionicon'
// 		iconStyle={styles.filterIcon}
// 		containerStyle={styles.filterIconContainer}
// 		onPress={() => screenProps.navigation.navigate('Filter')}
// 	/>
// })