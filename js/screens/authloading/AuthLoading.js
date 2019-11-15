import React from 'react'

import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import { styles } from './styles'
import Logo from '../../assets/images/logo-3x.png'

const AuthLoading = props => {
	return (
		<SafeAreaView style={styles.background}>
			<StatusBar barStyle='dark-content' />
			<View style={styles.mainContainer}>
				<View style={styles.logoContainer}>
					<Image
						source={Logo}
						style={styles.logo}
					/>
				</View>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Senior Care</Text>
					<Text style={styles.subTitle}>Connect</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default AuthLoading

{/* <SafeAreaView style={styles.background}>
				<StatusBar barStyle='light-content' />

				<ScrollView style={styles.mainContainer} contentContainerStyle={{flexGrow: 1}}>

					<LogoWithText size={100} containerStyle={styles.imageContainer} />

					<LoginForm {...props} /> 

					<View style={styles.bottomTextContainer}>
						<TouchableOpacity onPress={handleGoSignup}>
							<Text style={styles.swapFormText}>Don't have an account? Create one</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
				
			</SafeAreaView> */}