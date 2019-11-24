import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { TEST_FIND_ALL_CAREGIVERS, FIND_ALL_CAREGIVERS } from '../../../graphql/queries/caregiverQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../components/images/orangeArc/OrangeArc'
import CaregiverList from '../../../components/listItem/caregiversList/CaregiversList'

const Find = props => {
	const navParams = props.navigation.state.params
	const { filterCaregivers } = navParams ? navParams : {}

	const { loading, error, data, refetch } = useQuery(FIND_ALL_CAREGIVERS, {
		variables: {input: {
			...filterCaregivers
		}}
	})
	
	const allCaregivers = data && data.getAllCaregivers

	// const test = () => {
	// 	refetch()

	// }



	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				{allCaregivers && allCaregivers.map(caregiver => (
					<CaregiverList key={caregiver.user_id} {...caregiver} />
				))}
			</ScrollView>

			{/* <Button
				title='test'
				onPress={test}
			/> */}
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