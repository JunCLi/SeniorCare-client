import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { MY_JOB_APPS } from '../../../graphql/queries/jobQueries'

import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { styles } from './styles'

import MyApplications from '../../../components/listItem/myApplications/stillApplying/MyApplications'
import OrangeArc from '../../../components/images/orangeArc/OrangeArc'

const JobBoard = props => {
	const { data } = useQuery(MY_JOB_APPS)

	const stillApplying = data
		? data.getMyApplications.filter(application => application.status === 'applied')
		: []

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				<View style={styles.stillApplyingContainer}>
					<Text style={styles.stillApplyingTitle}>Applying({stillApplying.length})</Text>

					{stillApplying.map(application => (
						application.status === 'applied' &&
							<MyApplications
								key={application.id}
								{...application}
								navigation={props.navigation}
							/>
					))}
				</View>


				<View style={styles.invited}>

				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default JobBoard