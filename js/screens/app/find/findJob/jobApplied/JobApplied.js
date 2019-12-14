import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button, Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../../../components/images/orangeArc/OrangeArc'
import AppliedJobImg from '../../../../../assets/images/applied-job-3x.png'

const JobApplied = props => {

	const handleGoFindJobs = () => {
		props.navigation.navigate('FindJobs')
	}

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				<View style={styles.imageContainer}>
					<Image
						source={AppliedJobImg}
						style={styles.image}
					/>
				</View>
				<Text style={styles.text}>Your application is sent. You will be notified if you are considered for the role.</Text>
				<Button
					title='Done'
					onPress={handleGoFindJobs}
					buttonStyle={styles.button}
					titleStyle={styles.buttonText}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default JobApplied

