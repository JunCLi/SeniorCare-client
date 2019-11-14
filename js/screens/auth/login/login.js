import React from 'react'

import { useMutation, useQuery } from '@apollo/react-hooks'
import { LOGIN, LOGOUT, GET_LOGGED_USER, DOING_STUFF_TO_CACHE, CHECK_STUFF } from '../../../gql/authQueries'

import { Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Button } from 'react-native-elements'


const Login = props => {
	const [ login ] = useMutation(LOGIN)
	const [ logout ] = useMutation(LOGOUT)
	const [ updateUser ] = useMutation(DOING_STUFF_TO_CACHE) 
	const { loading, error, data, refetch } = useQuery(GET_LOGGED_USER)
	const { loading: cloading, error: cerror, data: cdata, refetch: crefetch} = useQuery(CHECK_STUFF)

	const handleLogin = () => {
		login()
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : null}
			style={{flex: 1}}
		>
			<SafeAreaView>
				<StatusBar barStyle='dark-content' />
				<View>
					<Text>Login</Text>

					<Button
						title='login'
						onPress={handleLogin}
					/>

					<Button
						title='get logged user'
						onPress={() => {refetch(), console.log(data)}}
					/>

					<Button
						title='logout'
						onPress={() => logout()}
					/>

					<Button
						title='doing stuff to cache'
						onPress={() => updateUser()}
					/>

					<Button
						title='check local user stuff'
						onPress={() => {crefetch(), console.log('cdata: ', cdata)}}
					/>
				</View>
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default Login