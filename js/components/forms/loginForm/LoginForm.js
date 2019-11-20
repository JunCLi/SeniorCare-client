import React from 'react'

import { useMutation } from '@apollo/react-hooks'
import { SIGNUP } from '../../../graphql/queries/authQueries'

import { View } from 'react-native'
import { Button, Icon, Input, } from 'react-native-elements'
import { Formik } from 'formik'
import { styles } from './styles'

const SignupForm = props => {
	const { navigate } = props
	// const [ signup ] = useMutation(SIGNUP)

	const intialValues = {
		email: '',
		password: '',
	}

	return (
		<Formik
			initialValues={intialValues}
			onSubmit={ async (values, { setSubmitting }) => {
				try {
					// const result = await signup({
					// 	variables: {input: {
					// 		email: values.email,
					// 		password: values.password,
					// 	}}
					// })
					// if (result.data.signup.message === 'success') {
					// 	navigate('ConfirmSignup')
					// }
				} catch(err) {
					throw err
				} finally {
					setSubmitting(false)
				}
			}}
		>
			{formikProps => {
				const {
					values,
					touched,
					errors,
					dirty,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit,
					handleReset,
					setFieldValue,
				} = formikProps

				return (
					<>
						<View style={styles.mainContainer}>
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

						</View>

						<View>
							<Button
								title='Login'
								buttonStyle={styles.button}
								onPress={handleSubmit}
								disabled={!dirty || isSubmitting}
								disabledStyle={styles.disabled}
								disabledTitleStyle={styles.disabledText}
							/>
						</View>
					</>
				)
			}}

		</Formik>
	)
}

export default SignupForm