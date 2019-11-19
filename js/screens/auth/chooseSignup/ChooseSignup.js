import React from 'react'

import { SafeAreaView, ScrollView, StatusBar,Text, View } from 'react-native'
import { Button, Image } from 'react-native-elements'
import { styles } from './styles'

import WelcomeImage from '../../../assets/images/welcomeBack-3x.png'
import CaregiversImage from '../../../assets/images/caregivers-3x.png'
import FamilyImage from '../../../assets/images/family-3x.png'

const ChooseSignup = props => {
	const goSignup = signupType => {
		props.navigation.navigate('Signup', { signupType: signupType })
	}
	
	return (
		<SafeAreaView style={styles.background}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewFix}>
				<View style={styles.introContainer}>
					<View style={styles.welcomeContainer}>
						<Image
							source={WelcomeImage}
							style={styles.welcome}
						/>
					</View>
					<View style={styles.descriptionContainer}>
						<Text style={styles.description}>We’re here to help families reduce stress, save time, and money finding care for their aging loved ones.</Text>
					</View>
				</View>

				<View style={styles.choicesOuterContainer}>
					<View style={styles.choicesInnerContainer}>

						<View style={styles.imageContainer}>
							<Image
								source={FamilyImage}
								style={styles.familyImage}
							/>
						</View>
						<Button
							title='Family'
							buttonStyle={styles.choiceButton}
							titleStyle={styles.choiceButtonText}
							onPress={() => goSignup('family')}
						/>
						<View style={styles.choiceDescriptionContainer}>
							<Text style={styles.choiceDescription}>We're looking for a caregiver</Text>
						</View>
					</View>

					<View style={styles.choicesInnerContainer}>
						<View style={styles.imageContainer}>
							<Image
								source={CaregiversImage}
								style={styles.caregiversImage}
							/>
						</View>
						<Button
							title='Caregiver'
							buttonStyle={styles.choiceButton}
							titleStyle={styles.choiceButtonText}
							onPress={() => goSignup('caregiver')}
						/>
						<View style={styles.choiceDescriptionContainer}>
							<Text style={styles.choiceDescription}>I'm looking to provide care</Text>
						</View>
					</View>

				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default ChooseSignup