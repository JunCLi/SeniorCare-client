import React from 'react'

import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_ALL_SENIORS } from '../../../../../graphql/queries/familyQueries'
import { SELECT_SENIOR_JOB_FORM } from '../../../../../graphql/queries/jobQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

import SeniorList from '../../../../../components/listItem/seniorsList/SeniorsList'

const SelectSenior = props => {
	const { data } = useQuery(GET_ALL_SENIORS)
	const [ addSeniorToForm ] = useMutation(SELECT_SENIOR_JOB_FORM)

	const handleSelect = senior => {
		const { medical_conditions, id, ...newSeniorObject} = senior
		addSeniorToForm({
			variables: {input: {
				...newSeniorObject,
				seniorId: id,
				medicalConditions: medical_conditions,
			}}
		})

		props.navigation.navigate('CreateJobOverview')
	}

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>

				{data && data.getAllSeniors.map(senior => (
					<SeniorList
						key={senior.id}
						senior={senior}
						handleSelect={handleSelect}
					/>
				))}

			</ScrollView>
		</SafeAreaView>
	)
}

export default SelectSenior