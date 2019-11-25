import React, { useState } from 'react'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button, ButtonGroup, Image } from 'react-native-elements'
import { styles } from './styles'

import About from './about/About'

const ViewCaregiver = props => {
	const navParams = props.navigation.state.params
	const { user_id, userDetails, caregiverDetails } = navParams

	const buttonArray = [
		{
			title: 'About',
			value: 'about',
		},
		{
			title: 'Experience',
			value: 'experience',
		},
		{
			title: 'Reviews',
			value: 'reviews',
		},
	]

	const [ selectedButton, setSelectedButton ] = useState(buttonArray[0].value)

	const handleSelectButton = selected => {
		setSelectedButton(selected)
	}

	const displaySelectedSection = () => {
		const selectedSection = buttonArray.filter(section => section.value === selectedButton)
		if (selectedButton === 'experience') return <Text>experience</Text> 
		else if (selectedButton === 'reviews') return <Text>review</Text> 
		
		return <About {...navParams} /> 
	}

	return (
		<>
			<SafeAreaView style={styles.background}>
				<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
				<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
					<View>
						<Image
							source={{ uri: userDetails.avatar }}
							style={styles.avatar}
						/>
						<View style={styles.buttonContainer}>
							{buttonArray.map(button => (
								<Button
									key={button.value}
									title={button.title}
									onPress={() => handleSelectButton(button.value)}
									buttonStyle={selectedButton === button.value 
										? styles.selectedButtonStyle
										: styles.buttonStyle}
									titleStyle={selectedButton === button.value
										? styles.selectedButtonText
										: styles.buttonText}
								/>
							))}
						</View>
					</View>

					{
						displaySelectedSection()
					}
					
					
				</ScrollView>
			</SafeAreaView>
		</>
	)
}

export default ViewCaregiver