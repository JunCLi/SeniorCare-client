import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_SENIORS } from '../../../../graphql/queries/familyQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../../components/images/orangeArc/OrangeArc'
import SeniorsList from '../../../../components/listItem/seniorsList/SeniorsList'

const Seniors = props => {
	const { data } = useQuery(GET_ALL_SENIORS)

	const handleAddSenior = () => {
		// TODO add senior
		console.log('TO BE IMPLEMENTED')
	}

	const viewSenior = senior => {
		props.navigation.navigate('ViewSenior', {
			...senior,
		})
	}

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				{ data && data.getAllSeniors.map(senior => (
					<SeniorsList
						key={senior.id}
						senior={senior}
						handleSelect={() => viewSenior(senior)}
					/>
				))}
				<TouchableOpacity
					style={styles.addSeniorContainer}
					onPress={handleAddSenior}
				>
					<View style={styles.iconContainer}>
						<Icon
							type='entypo'
							name='plus'
							iconStyle={styles.icon}
						/>
					</View>
					<Text style={styles.addSeniorText}>Create a new senior profile</Text>
				</TouchableOpacity>

			</ScrollView>
		</SafeAreaView>
	)
}

export default Seniors