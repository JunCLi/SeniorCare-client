import React from 'react'

// import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks'
// import { START_CONVERSATION, ADD_MESSAGE, GET_MESSAGES, GET_CONVERSATIONS } from '../../../../graphql/queries/messagesQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

const Messages = props => {
	

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				<Text>conversation</Text>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Messages