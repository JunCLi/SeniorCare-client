import React from 'react'

import { View } from 'react-native'
import { Input, } from 'react-native-elements'
import { styles } from './styles'

const SignupForm = props => {
	const { values, handleChange } = props

	return (
		<View style={styles.formContainer}>
			<View style={styles.inputViewContainer}>
				<Input
					value={values.email}
					keyboardType='email-address'
					onChangeText={handleChange('email')}
					label='Email'
					labelStyle={styles.label}
					placeholder='me@email.com'
					placeholderTextColor={styles.placeholderTextColor.color}
					editable={true}
					autoCompleteType='email'
					inputStyle={styles.input}
					containerStyle={styles.inputContainer}
					leftIconContainerStyle={styles.leftIconContainer}
					/>
			</View>
			<View style={styles.inputViewContainer}>
				<Input
					value={values.password}
					onChangeText={handleChange('password')}
					label='Password'
					labelStyle={styles.label}
					placeholder='At least 6 characters'
					placeholderTextColor={styles.placeholderTextColor.color}
					editable={true}
					autoCompleteType='password'
					secureTextEntry={true}
					inputStyle={styles.input}
					containerStyle={styles.inputContainer}
					leftIconContainerStyle={styles.leftIconContainer}
				/>
			</View>
		</View>
	)
}

export default SignupForm