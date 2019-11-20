import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

const ConfirmSignup = props => {
	const goLogin = () => {
		props.navigation.navigate('Login')
	}

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewFix}>
				<View style={styles.introContainer}>
					<Text style={styles.introText}>Confirm Email</Text>
				</View>

				<View style={styles.messageContainer}>
					<Text style={styles.message}>Normally we will confirm email and then phone number here but until those are ready, let's just move on.</Text>
				</View>
				<Button
					title='Go to Login'
					onPress={goLogin}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default ConfirmSignup