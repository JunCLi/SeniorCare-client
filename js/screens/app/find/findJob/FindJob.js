import React from 'react'

import { useQuery } from '@apollo/react-hooks'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../../components/images/orangeArc/OrangeArc'

const FindJob = props => {
	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				
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