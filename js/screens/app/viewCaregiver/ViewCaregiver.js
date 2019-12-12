import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { START_CONVERSATION } from '../../../graphql/queries/messagesQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button, ButtonGroup, Image } from 'react-native-elements'
import { styles } from './styles'

import ButtonTab from '../../../components/buttons/buttonTabs/ButtonTab'
import About from './about/About'
import Experience from './experience/Experience'
import Reviews from './reviews/Reviews'

const ViewCaregiver = props => {
	const navParams = props.navigation.state.params
	const { userId, userDetails, caregiverDetails, fromJob } = navParams

	const [ startConversation ] = useMutation(START_CONVERSATION)

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
		if (selectedButton === 'experience') return <Experience {...navParams}>experience</Experience> 
		else if (selectedButton === 'reviews') return <Reviews {...navParams}>review</Reviews> 
		
		return <About {...navParams} /> 
	}

	const handleContactCaregiver = async () => {
		// TODO
		const result = await startConversation({
			variables: {
				recipientId: userId
			}
		})

		const destination = fromJob ? 'InJobConversation' : 'InFindConversation'

		if (result.data.startConversation.caregiverId === userId) {
			props.navigation.navigate(destination, {
				conversationId: result.data.startConversation.id,
				recipient: {
					userId: userId,
					avatar: userDetails.avatar,
					firstName: userDetails.firstName,
					lastName: userDetails.lastName,
				},
			})
		}
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
						<ButtonTab
							buttonArray={buttonArray}
							selectedButton={selectedButton}
							handleSelectButton={handleSelectButton}
						/>
					</View>

					{
						displaySelectedSection()
					}
				</ScrollView>
			</SafeAreaView>
			<Button
				title='Contact Caregiver'
				buttonStyle={styles.submitButton}
				onPress={handleContactCaregiver}
			/>
		</>
	)
}

export default ViewCaregiver