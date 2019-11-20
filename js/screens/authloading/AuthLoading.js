import React, { useEffect } from 'react'

import { useQuery } from '@apollo/react-hooks'
import { CHECK_AUTHENTICATION } from '../../graphql/queries/authQueries'

import { SafeAreaView, StatusBar, View } from 'react-native'
import { Image } from 'react-native-elements'
import { styles } from './styles'

import Logo from '../../assets/images/logo-3x.png'
import LogoText from '../../assets/images/LogoText-3x.png'

const AuthLoading = props => {
	const { loading, error, data } = useQuery(CHECK_AUTHENTICATION, {
		fetchPolicy: 'network-only'
	})

	const handleGoAuthentication = () => {
		props.navigation.navigate('Auth')
	}

	const handleGoApp = () => {
		props.navigation.navigate('App')
	}

	checkNav = () => {
		const navParams = props.navigation.state.params
		const loggedOut = navParams && navParams.loggedOut
		const loggedIn = navParams && navParams.loggedIn
		
		setTimeout(() => !error && !loggedOut || loggedIn ? handleGoApp() : handleGoAuthentication(), 300)
		
	}

	useEffect(() => {
		if (!loading) {
			checkNav()
		}
	}, [data, loading, error])

	return (
		<SafeAreaView style={styles.background}>
			<StatusBar barStyle='dark-content' />
			<View style={styles.logoContainer}>
				<Image
					source={Logo}
					style={styles.logo}
					placeholderStyle={styles.placeholderLogo}
					/>
			</View>
			<View style={styles.logoTextContainer}>
				<Image
					source={LogoText}
					style={styles.logoText}
					placeholderStyle={styles.placeholderLogo}
				/>
			</View>
		</SafeAreaView>
	)
}

export default AuthLoading