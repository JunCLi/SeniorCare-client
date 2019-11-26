import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../components/images/orangeArc/OrangeArc'
import NoJobs from './noJobs/NoJobs'

const JobBoard = props => {
	const handleGoJobCreate = () => {
		props.navigation.navigate('CreateJobOverview')
	}
	
	// TODO remove
	props.navigation.navigate('CreateJobOverview')

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				<NoJobs handleGoJobCreate={handleGoJobCreate} />
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