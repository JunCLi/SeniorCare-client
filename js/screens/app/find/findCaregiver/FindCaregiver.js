import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_CAREGIVER_FILTER, FIND_ALL_CAREGIVERS } from '../../../../graphql/queries/caregiverQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../../components/images/orangeArc/OrangeArc'
import CaregiverList from '../../../../components/listItem/caregiversList/CaregiversList'

const FindCaregiver = props => {
	const { data: filterData } = useQuery(GET_CAREGIVER_FILTER)
	const { __typename, ...filterProperties } = filterData ? filterData.getCaregiverFilter : {}

	const filterObjectConstructor = filterParam => {
		const filter = {}

		if (filterParam.gender) filter.gender = filterParam.gender
		if (filterParam.availability) filter.availability = filterParam.availability
		if (filterParam.hourlyRate) filter.hourlyRate = Math.round(filterParam.hourlyRate)
		if (filterParam.yearsExperience) filter.yearsExperience = Math.round(filterParam.yearsExperience)

		return filter
	}

	const { loading, error, data: caregiverData, refetch } = useQuery(FIND_ALL_CAREGIVERS, {
		variables: {input: filterObjectConstructor(filterProperties)}
	})

	const allCaregivers = caregiverData && caregiverData.getAllCaregivers

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				{allCaregivers && allCaregivers.map(caregiver => (
					<CaregiverList key={caregiver.userId} {...caregiver} navigation={props.navigation} />
				))}

				<View style={styles.extraSpace}></View>
			</ScrollView>
		</SafeAreaView>
	)
}

FindCaregiver.navigationOptions = screenProps => ({
	headerRight: <Icon
		name='ios-options'
		type='ionicon'
		iconStyle={styles.filterIcon}
		containerStyle={styles.filterIconContainer}
		onPress={() => screenProps.navigation.navigate('Filter')}
	/>
})

export default FindCaregiver