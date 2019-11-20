import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button, Image } from 'react-native-elements'
import { styles } from './styles'

import InfoScreeningIcon from '../../../assets/images/info-screening-3x.png'
import GoogleIcon from '../../../assets/images/google-icon-3x.png'

const Info = props => {

	// TODO remove autoLink
	// props.navigation.navigate('Login')

	const goSignup = () => {
		props.navigation.navigate('ChooseSignup')
	}

	const goLogin = () => {
		props.navigation.navigate('Login')
	}

	return (
		<SafeAreaView style={styles.background}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewFix}>
				<View style={styles.topContainer}>
					<View style={styles.iconOuterContainer}>
						<View style={styles.iconInnerContainer}>

							<View style={styles.infoScreeningContainer}>
								<Image
									source={InfoScreeningIcon}
									style={styles.infoScreeningLogo}
								/>
							</View>

						</View>
					</View>

					<View style={styles.infoContainer}>
						<View style={styles.textContainer}>
							<Text style={styles.title}>Pre-Screened</Text>
							<Text style={styles.title}>Caregivers</Text>
						</View>
						<View style={styles.textContainer}>
							<Text style={styles.infoText}>No caregiver is listed on our marketplace until proof of qualifications and background checks are verified</Text>
						</View>
					</View>

				</View>

				<View style={styles.bottomContainer}>
					<View style={styles.signupAndLoginContainer}>
						<View style={styles.signupContainer}>
							<Button
								title='Sign Up'
								buttonStyle={styles.signup}
								titleStyle={styles.signupText}
								onPress={goSignup}
							/>	
							<Button
								title='Google'
								icon={
									<Image
										source={GoogleIcon}
										style={styles.googleIcon}
									/>
								}
								buttonStyle={styles.googleSignup}
								titleStyle={styles.googleSignupText}
							/>
						</View>

						<View style={styles.loginContainer}>
							<Text style={styles.loginMessage}>Already have an account? </Text>
							<Button
								title='Log in.'
								buttonStyle={styles.login}
								titleStyle={styles.loginText}
								onPress={goLogin}
							/>
						</View>
					</View>

					<View style={styles.termsContainer}>
						<Text style={styles.terms}>By continuing you accept the <Text style={styles.termsConditions}>Terms of Service</Text> and <Text style={styles.termsConditions}>Privacy Policy</Text></Text>
					</View>
				</View>
			
			</ScrollView>
		</SafeAreaView>
	)
}

export default Info