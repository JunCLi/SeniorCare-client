import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from './styles'

import BlueWhiteButtons from '../../../../../components/buttons/blueWhite/singleSelect/BlueWhiteButtons'

const Options = props => {
	const { values, setFieldValue } = props.formikProps

	const buttons = [
		{
			title: 'Yes',
			value: true,
		},
		{
			title: 'No',
			value: false,
		},
	]

	const handleChangeCigarette = value => {
		setFieldValue('cigarette', value)
	}

	const handleChangePets = value => {
		setFieldValue('pets', value)
	}

	const handleChangeCannabis = value => {
		setFieldValue('cannabis', value)
	}

	return (
		<View>
			<View style={styles.optionContainer}>
				<View style={styles.questionContainer}>
					<Text style={styles.question}>Cigarette smoking?</Text>
				</View>
				<BlueWhiteButtons
					buttonArray={buttons}
					selected={values.cigarette}
					handleSelect={handleChangeCigarette}
				/>
			</View>

			<View style={styles.optionContainer}>
				<View style={styles.questionContainer}>
					<Text style={styles.question}>Pets?</Text>
				</View>
				<BlueWhiteButtons
					buttonArray={buttons}
					selected={values.pets}
					handleSelect={handleChangePets}
					/>
			</View>

			<View style={styles.optionContainer}>
				<View style={styles.questionContainer}>
					<Text style={styles.question}>Cannabis?</Text>
				</View>
				<BlueWhiteButtons
					buttonArray={buttons}
					selected={values.cannabis}
					handleSelect={handleChangeCannabis}
					/>
			</View>
		</View>
	)
}

export default Options