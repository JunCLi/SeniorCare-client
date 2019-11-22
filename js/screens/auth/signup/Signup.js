import React from 'react'

import { useMutation } from '@apollo/react-hooks'
import { SIGNUP } from '../../../graphql/queries/authQueries'

import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Formik } from 'formik'
import { styles } from './styles'

import SignupForm from '../../../components/forms/signupForm/SignupForm'

const Signup = props => {
	const { userType } = props.navigation.state.params
	const [ signup ] = useMutation(SIGNUP)

	const intialValues = {
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
		phoneNumber: '905-111-1111',
	}

	return (
		<Formik
			initialValues={intialValues}
			onSubmit={ async (values, { setSubmitting }) => {
				try {
					const result = await signup({
						variables: {input: {
							email: values.email,
							password: values.password,
							firstName: values.firstName,
							lastName: values.lastName,
							phoneNumber: values.phoneNumber,
							userType: userType,
						}}
					})

					if (result.data.signup.message === 'success') {
						props.navigation.navigate('ConfirmSignup')
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
									<Text style={styles.introText}>Sign up as a {userType}</Text>
								</View>

								<SignupForm {...formikProps} />
							</ScrollView>
						</SafeAreaView>

						<View>
							<Button
								title='Signup'
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

export default Signup