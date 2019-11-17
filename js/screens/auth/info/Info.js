import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button, Image } from 'react-native-elements'
import { styles } from './styles'

import InfoScreeningIcon from '../../../assets/images/info-screening-3x.png'

const Info = props => {
	return (
		<>
		<SafeAreaView style={styles.background}>
			<StatusBar barStyle='dark-content' />
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
					<View style={styles.signupContainer}>
						<Button
							title='Sign Up'
							buttonStyle={styles.button}
							titleStyle={styles.buttonText}
						/>	
						<Button
							title='Google'
							buttonStyle={styles.button}
							titleStyle={styles.buttonText}
						/>
					</View>					
				</View>
			
			</ScrollView>
		</SafeAreaView>
		</>
	)
}

export default Info