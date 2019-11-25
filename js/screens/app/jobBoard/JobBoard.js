import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button, Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../components/images/orangeArc/OrangeArc'
import NoJobs from './noJobs/NoJobs'

const JobBoard = props => {
	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				<NoJobs navigation={props.navigation}/>
			</ScrollView>
		</SafeAreaView>

	)
}

export default JobBoard