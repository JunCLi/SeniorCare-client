import React from 'react'

import { calcAge } from '../../../../util/helperFunctions/calc'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { styles } from './styles'

import Header from '../../../../components/header/simple/Header'
import SimpleLabelValue from '../../../../components/labelValue/simple/SimpleLabelValue'
import StackedLabelValue from '../../../../components/labelValue/stacked/StackedLabelValue'

const ViewSenior = props => {
	const stateParams = props.navigation.state.params
	console.log('props', stateParams)

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
					<Avatar
						source={{ uri: stateParams.picture }}
						containerStyle={styles.avatar}
						avatarStyle={styles.avatar}
					/>
				
					<Header title={'About'} />
					<View style={styles.detailsContainer}>
						<SimpleLabelValue label={'Name'} value={stateParams.name} />

						<SimpleLabelValue label={'Gender'} value={stateParams.gender} />

						<SimpleLabelValue label={'Age'} value={calcAge(stateParams.birthdate)} />

						<SimpleLabelValue label={'Relationship'} value={stateParams.relation} />

						<SimpleLabelValue label={'Language'} value={stateParams.language.join(', ')} capitalize={true} />

					</View>

					<Header title={'Bio'} />
					<View style={styles.detailsContainer}>
						<StackedLabelValue value={stateParams.bio} />
					</View>
					
					<Header title={'Medical conditions'} />
					<View style={styles.detailsContainer}>
						<StackedLabelValue value={stateParams.medicalConditions} />
					</View>

			</ScrollView>
		</SafeAreaView>
	)
}

export default ViewSenior