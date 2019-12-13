import React from 'react'

import { useQuery, useSubscription } from '@apollo/react-hooks'
import { GET_LOGGED_USER_CACHE } from '../../../graphql/queries/authQueries'
import { GET_ALL_USER_JOBS, MY_JOB_SUBSCRIPTION } from '../../../graphql/queries/jobQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../components/images/orangeArc/OrangeArc'
import NoJobs from './noJobs/NoJobs'
import Jobs from './jobs/Jobs'

const JobBoard = props => {
	const { data } = useQuery(GET_ALL_USER_JOBS)
	const { data: userData } = useQuery(GET_LOGGED_USER_CACHE)

	const handleGoJobCreate = () => {
		props.navigation.navigate('CreateJobOverview')
	}

	useSubscription(MY_JOB_SUBSCRIPTION, {
		variables: {
			familyId: userData.getLoggedUser.userId 
		},
		onSubscriptionData: ({ client, subscriptionData }) => {
			const newJob = subscriptionData.data.myJobAdded

			const data = client.readQuery({
				query: GET_ALL_USER_JOBS,
			})

			client.writeQuery({
				query: GET_ALL_USER_JOBS,
				data: {
					getAllUserJobs: [...data.getAllUserJobs, newJob]
				}
			})
		}
	})

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				{ data && data.getAllUserJobs.length
					? <Jobs jobs={data.getAllUserJobs} navigation={props.navigation} />
					: <NoJobs handleGoJobCreate={handleGoJobCreate} />
				}
			</ScrollView>
		</SafeAreaView>

	)
}

JobBoard.navigationOptions = screenProps => {
	const handleGoJobCreate = () => {
		screenProps.navigation.navigate('CreateJobOverview')
	}

	return {
		headerRight: <View style={styles.topRightIconContainer}>
			<Icon
				type='ionicon'
				name='md-add'
				iconStyle={styles.icons}
				onPress={handleGoJobCreate}
			/>

			<Icon
				type='ionicon'
				name='md-time'
				iconStyle={styles.icons}
			/>
		</View>
	}
}

export default JobBoard