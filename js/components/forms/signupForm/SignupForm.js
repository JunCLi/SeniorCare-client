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
			<View style={styles.inputViewContainer}>
				<Input
					value={values.confirmPassword}
					onChangeText={handleChange('confirmPassword')}
					label='Confirm Password'
					labelStyle={styles.label}
					placeholder='Confirm Password'
					placeholderTextColor={styles.placeholderTextColor.color}
					editable={true}
					autoCompleteType='password'
					secureTextEntry={true}
					inputStyle={styles.input}
					containerStyle={styles.inputContainer}
					leftIconContainerStyle={styles.leftIconContainer}
				/>
			</View>
			<View style={styles.inputViewContainer}>
				<Input
					value={values.firstName}
					onChangeText={handleChange('firstName')}
					label='First Name'
					labelStyle={styles.label}
					placeholder='Emily'
					placeholderTextColor={styles.placeholderTextColor.color}
					editable={true}
					inputStyle={styles.input}
					containerStyle={styles.inputContainer}
				/>
			</View>
			<View style={styles.inputViewContainer}>
				<Input
					value={values.lastName}
					onChangeText={handleChange('lastName')}
					label='Last Name'
					labelStyle={styles.label}
					placeholder='Yeung'
					placeholderTextColor={styles.placeholderTextColor.color}
					editable={true}
					inputStyle={styles.input}
					containerStyle={styles.inputContainer}
				/>
			</View>
		</View>
	)
}

export default SignupForm