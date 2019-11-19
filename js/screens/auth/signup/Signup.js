import React from 'react'

import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { styles } from './styles'

import SignupForm from '../../../components/forms/signupForm/SignupForm'

const Signup = props => {
	const { signupType } = props.navigation.state.params
	console.log(props.navigation.state.params)

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : null}
			keyboardVerticalOffset={88}
			style={styles.avoidKeyboard}
		>
			<SafeAreaView style={styles.backgroundBlue}>
				<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
				<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewFix}>
					<View style={styles.introContainer}>
						<Text style={styles.introText}>Sign up as a {signupType}</Text>
					</View>

					<SignupForm />
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default Signup