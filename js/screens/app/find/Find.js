import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_CAREGIVER_FILTER, FIND_ALL_CAREGIVERS } from '../../../graphql/queries/caregiverQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../components/images/orangeArc/OrangeArc'
import CaregiverList from '../../../components/listItem/caregiversList/CaregiversList'

const Find = props => {
	const { data: testData } = useQuery(GET_CAREGIVER_FILTER)
	const { __typename, ...filterProperties} = testData ? testData.getCaregiverFilter : {}
	
	const filterObjectContructor = filterParam => {
		const filter = {}
		if (filterParam.gender) filter.gender = filterParam.gender
		if (filterParam.availability) filter.availability = filterParam.availability
		if (filterParam.hourlyRate) filter.hourlyRate = Math.round(filterParam.hourlyRate)
		if (filterParam.yearsExperience) filter.yearsExperience = Math.round(filterParam.yearsExperience)

		return filter
	}

	const { loading, error, data, refetch } = useQuery(FIND_ALL_CAREGIVERS, {
		variables: {input: filterObjectContructor(filterProperties)}
	})

	const allCaregivers = data && data.getAllCaregivers

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				{allCaregivers && allCaregivers.map(caregiver => (
					<CaregiverList key={caregiver.user_id} {...caregiver} navigation={props.navigation} />
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