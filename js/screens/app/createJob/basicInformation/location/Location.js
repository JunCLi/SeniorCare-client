import React from 'react'

import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { styles } from './styles'

const Location = props => {
	const { values, handleChange } = props.formikProps

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>Where will the service take place?</Text>
				<Text style={styles.questionSubheader}>Your address will not be displayed on your Profile.</Text>
			</View>
			<View style={styles.inputViewContainer}>
				<Input
					value={values.location.address}
					onChangeText={handleChange('location.address')}
					editable={true}
					placeholder='123 Street Name'
					label='Address'
					labelStyle={styles.label}
					containerStyle={styles.inputContainer}
					inputStyle={styles.input}
				/>
			</View>
			
			<View style={styles.inputViewContainer}>
				<Input
					value={values.location.city}
					onChangeText={handleChange('location.city')}
					editable={true}
					placeholder='Toronto'
					label='City'
					labelStyle={styles.label}
					containerStyle={styles.inputContainer}
					inputStyle={styles.input}
				/>
			</View>

			<View style={styles.inputViewContainer}>
				<Input
					value={values.location.province}
					onChangeText={handleChange('location.province')}
					editable={true}
					placeholder='Ontario'
					label='Province'
					labelStyle={styles.label}
					containerStyle={styles.inputContainer}
					inputStyle={styles.input}
				/>
			</View>

			<View style={styles.inputViewContainer}>
				<Input
					value={values.location.postalCode}
					onChangeText={handleChange('location.postalCode')}
					editable={true}
					placeholder='A1B 2C3'
					label='Postal Code'
					labelStyle={styles.label}
					containerStyle={styles.inputContainer}
					inputStyle={styles.input}
				/>
			</View>
		</View>
	)
}

export default Location