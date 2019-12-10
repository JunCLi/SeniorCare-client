import React from 'react'

import { useMutation, useQuery } from '@apollo/react-hooks'
import { LOGOUT, GET_PROFILE } from '../../../graphql/queries/authQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Button, Icon, Image, ListItem } from 'react-native-elements'
import { styles } from './styles'

import OrangeArc from '../../../components/images/orangeArc/OrangeArc'

const Profile = props => {
	const { data, loading } = useQuery(GET_PROFILE)
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

	if (loading) return (
		<View>
			<Text>loading...</Text>
		</View>
	) 

	const handleMenuPress = path => {
		switch (path) {
			case 'Account':
				props.navigation.navigate(path, {
					...user
				})
				break
		
			default:
				props.navigation.navigate(path)
				break
		}
	}

	const menuOptions = [
		{
			title: 'Senior',
			iconType: 'font-awesome',
			iconName: 'user-o',
			path: 'MySeniors'
		},
		{
			title: 'Account',
			iconType: 'simple-line-icon',
			iconName: 'settings',
			path: 'Account'
		},
		{
			title: 'Help Center',
			iconType: 'simple-line-icon',
			iconName: 'question',
			path: 'HelpCenter'
		},
	]

	const user = data.getLoggedUser

	return (
		<SafeAreaView style={styles.backgroundBlue}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>

				<View style={styles.avatarContainer}>
					<Avatar
						source={{ uri: user.avatar }}
						avatarStyle={styles.avatar}
						containerStyle={styles.avatar}
					/>

					<Text style={styles.name}>{user.firstName} {user.lastName}</Text>
				</View>

				<View style={styles.menuContainer}>
					{ menuOptions.map(menu => (
						<TouchableOpacity
							key={menu.path}
							style={styles.listItemOuterContainer}
							onPress={() => handleMenuPress(menu.path)}
						>
							<ListItem
								title={menu.title}
								rightIcon={
									<Icon
										type={menu.iconType}
										name={menu.iconName}
										iconStyle={styles.icon}
									/>
								}
								titleStyle={styles.listItemTitle}
								containerStyle={styles.listItemContainer}
							/>
						</TouchableOpacity>
					))}
				</View>

				<Button
					title='Logout'
					onPress={handleLogout}
					titleStyle={styles.logoutText}
					buttonStyle={styles.logoutButton}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Profile