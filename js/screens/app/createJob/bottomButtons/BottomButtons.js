import React from 'react'

import { useMutation } from '@apollo/react-hooks'
import { CHANGE_FORM_POSITION } from '../../../../graphql/queries/jobQueries'

import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

const BottomButtons = props => {
	const { section, currentPosition } = props
	const { step, totalSteps } = currentPosition
	const [ changeFormPosition ] = useMutation(CHANGE_FORM_POSITION)

	const handleGoBack = input => {
		step === 1 
			? props.navigation.navigate('CreateJobOverview')
			: changeFormPosition({
					variables: {input: {
						section: section,
						direction: 'back',
						totalSteps: totalSteps,
					}}
		})
	}

	const handleGoNext = input => {
		changeFormPosition({
			variables: {input: {
				section: section,
				direction: 'next',
				totalSteps: totalSteps,
			}}
		})
	}

	return (
		<View style={styles.mainContainer}>
			<Button
				title='Back'
				onPress={handleGoBack}
				buttonStyle={styles.back}
				titleStyle={styles.backTitle}
			/>
			<Button
				title='Next'
				onPress={handleGoNext}
				buttonStyle={styles.next}
				titleStyle={styles.nextTitle}
			/>
		</View>
	)
}

export default BottomButtons