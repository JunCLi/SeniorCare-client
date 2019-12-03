import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from '../../../graphql/queries/authQueries' 

import { Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Formik } from 'formik'
import { styles } from './styles'

import LoginForm from '../../../components/forms/loginForm/LoginForm'

const Login = props => {
	const [ forgetPassword, setForgetPassword ] = useState(false)
	const [ login ] = useMutation(LOGIN)

	const intialValues = {
		email: '',
		password: '',
	}

	const handleForgotPassword = () => {
		setForgetPassword(!forgetPassword)
	}

	return (
		<Formik
			initialValues={intialValues}
			onSubmit={ async (values, { setSubmitting }) => {
				try {
					const result = await login({
						variables: {input: {
							email: values.email,
							password: values.password,
						}}
					})

					if (result.data.login.message === 'success') {
						props.navigation.navigate('AuthLoading', { loggingIn: true })
					}
				} catch(err) {
					throw err
				} finally {
					if (this.isMounted) setSubmitting(false)
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
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : null}
						keyboardVerticalOffset={styles.keyboardOffset.margin}
						style={styles.avoidKeyboard}
					>
						<SafeAreaView style={styles.backgroundBlue}>
							<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
							<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
								<View style={styles.introContainer}>
									<Text style={styles.introText}>Welcome Back!</Text>
								</View>

								<LoginForm {...formikProps} />

								<View style={styles.forgetPasswordContainer}>
									<Button
										title='Forgot password?'
										onPress={handleForgotPassword}
										buttonStyle={styles.forgotButton}
										titleStyle={styles.forgotButtonText}
									/>
									{forgetPassword && <Text>This feature is not yet implemented</Text>}
								</View>

							</ScrollView>
						</SafeAreaView>

						<View>
							<Button
								title='Login'
								buttonStyle={styles.submitButton}
								onPress={handleSubmit}
								disabled={!dirty || isSubmitting}
								disabledStyle={styles.submitDisabled}
								disabledTitleStyle={styles.submitDisabledText}
							/>
						</View>
					</KeyboardAvoidingView>
				)
			}}
		</Formik>
	)
}

export default Login