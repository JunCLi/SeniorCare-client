import React from 'react'

import { useMutation } from '@apollo/react-hooks'
import { LOGOUT } from '../../../../graphql/queries/authQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

import { formatPhoneNumber } from '../../../../util/helperFunctions/format'

import Header from '../../../../components/header/simple/Header'
import SimpleLabelValue from '../../../../components/labelValue/simple/SimpleLabelValue'
import MenuItem from '../../../../components/listItem/menuItem/MenuItem'

const Account = props => {
	const stateParams = props.navigation.state.params
	const [ logout ] = useMutation(LOGOUT)

	const handlePress = () => {
		// TODO accounts additional information stuff
		console.log('TO BE IMPLEMENTED')
	}

	
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
				<Header title={'Phone & Email'} />
				<View style={styles.detailsContainer}>
					<MenuItem title={formatPhoneNumber(stateParams.phoneNumber)} />
					<MenuItem title={stateParams.email} />
				</View>

				<Header title={'Notifications'} />
				<View style={styles.detailsContainer}>
					<MenuItem title={'Push Notifications'} slider={true} />
					<MenuItem title={'Email/Sms'} slider={true} />
				</View>

				<Header title={'Membership'} />
				<View style={styles.detailsContainer}>
					<MenuItem title={'Upgrade your membership'} chevron={true} handlePress={handlePress} />
				</View>

				<Header title={'Legal'} />
				<View style={styles.detailsContainer}>
					<MenuItem title={'Privacy Policy'} chevron={true} handlePress={handlePress} />
					<MenuItem title={'Terms of Service'} chevron={true} handlePress={handlePress} />
					<MenuItem title={'Cookies Policy'} chevron={true} handlePress={handlePress} />
				</View>

				<Button
					title='Log out'
					onPress={handleLogout}
					titleStyle={styles.logoutText}
					buttonStyle={styles.logoutButton}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Account