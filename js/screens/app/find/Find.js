import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { FIND_ALL_CAREGIVERS } from '../../../graphql/queries/caregiverQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../components/images/orangeArc/OrangeArc'
import CaregiverList from '../../../components/listItem/caregiversList/CaregiversList'

const Find = props => {
	const { loading, error, data } = useQuery(FIND_ALL_CAREGIVERS)
	
	const allCaregivers = data && data.getAllCaregivers

	// TODO remove
	props.navigation.navigate('Filter')

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				{allCaregivers && allCaregivers.map(caregiver => (
					<CaregiverList key={caregiver.user_id} {...caregiver} />
				))}
			</ScrollView>
		</SafeAreaView>
	)
}

Find.navigationOptions = screenProps => ({
	headerRight: <Icon
		name='ios-options'
		type='ionicon'
		iconStyle={styles.filterIcon}
		containerStyle={styles.filterIconContainer}
		onPress={() => screenProps.navigation.navigate('Filter')}
	/>
})

export default Find