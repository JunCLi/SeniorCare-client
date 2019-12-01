import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/singleSelect/BlueWhiteButtons'

const Page2 = props => {
	const { values, setFieldValue } = props.formikProps

	const driversLicense = [
		{
			title: 'Yes',
			value: true,
		},
		{
			title: 'No',
			value: false,
		},
	]
	
	const handleDriversLicense = value => {
		setFieldValue('driversLicense', value)
	}

	return (
		<View>
			<View style={styles.optionContainer}>
				<View style={styles.questionContainer}>
					<Text style={styles.question}>Should the caregiver have a valid driver's license?</Text>
				</View>
				<BlueWhiteButtons
					buttonArray={driversLicense}
					selected={values.driversLicense}
					handleSelect={handleDriversLicense}
				/>
			</View>
		</View>
	)
}

export default Page2