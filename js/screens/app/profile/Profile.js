import React from 'react'

import { useMutation } from '@apollo/react-hooks'
import { LOGOUT } from '../../../graphql/queries/authQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { styles } from './styles'

const Profile = props => {
	const [ logout ] = useMutation(LOGOUT)
	
	const handleLogout = async () => {
		try {
			const result = await logout()
			if (result.data.logout.message === 'success') {
				props.navigation.navigate('AuthLoading', { loggingOut: true})
			}
		} catch(err) {
			throw err
		}
	}

	return (
		<SafeAreaView style={styles.background}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				<Button
					title='Logout'
					onPress={handleLogout}
				/>
			
			</ScrollView>
		</SafeAreaView>
	)
}

export default Profile