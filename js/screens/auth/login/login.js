import React, { useState } from 'react'

import { Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

import LoginForm from '../../../components/forms/loginForm/LoginForm'

const Login = props => {
	const [ forgetPassword, setForgetPassword ] = useState(false)

	const handleForgotPassword = () => {
		setForgetPassword(!forgetPassword)
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "height" : null}
			keyboardVerticalOffset={88}
			style={styles.avoidKeyboard}
		>
			<SafeAreaView style={styles.backgroundBlue}>
				<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
				<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewFix}>
					<View style={styles.introContainer}>
						<Text style={styles.introText}>Welcome Back!</Text>
					</View>

					<LoginForm navigate={props.navigation.navigate} />

					<View stlye={styles.forgetPasswordContainer}>
						<Button
							title='Forgot password?'
							onPress={handleForgotPassword}
							buttonStyle={styles.button}
							titleStyle={styles.buttonText}
						/>
						{forgetPassword && <Text>This feature is not yet implemented</Text>}
					</View>
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default Login