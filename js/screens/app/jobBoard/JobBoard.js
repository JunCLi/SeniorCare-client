import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_USER_JOBS } from '../../../graphql/queries/jobQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../components/images/orangeArc/OrangeArc'
import NoJobs from './noJobs/NoJobs'
import Jobs from './jobs/Jobs'

const JobBoard = props => {
	const { data } = useQuery(GET_ALL_USER_JOBS)

	const handleGoJobCreate = () => {
		props.navigation.navigate('CreateJobOverview')
	}

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