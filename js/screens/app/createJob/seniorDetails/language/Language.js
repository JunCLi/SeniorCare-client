import React, { useState } from 'react'

import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { styles } from './styles'

const Language = props => {
	const { values, setFieldValue } = props.formikProps
	const [ showAddLanguage, setShowAddLanguage ] = useState(false)
	const [ addLanguage, setAddLanguage ] = useState('')
	const [ showRemove, setShowRemove ] = useState('')

	const handleShowRemove = language => {
		setShowRemove(language)
	}

	const toggleAddLanguage = () => {
		setShowAddLanguage(!showAddLanguage)
	}

	const handleAddLanguage = () => {
		setFieldValue('language', [...values.language, addLanguage])
		setShowAddLanguage(false)
		setAddLanguage('')
	}

	const handleRemoveLanguage = removeLanguage => {
		const newLanguageArray = values.language.filter(language => language !== removeLanguage)
		setFieldValue('language', newLanguageArray)
	}

	return (
		<View>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>Do you have any language preferences?</Text>
			</View>
			{values.language.map((language, index) => (
				<TouchableWithoutFeedback
					key={index}
					onPress={() => handleShowRemove(language)}
				>
					<View style={styles.selectedLanguageContainer}>
						<Text style={styles.selectedLanguage}>{language}</Text>
						{showRemove === language
							&& <Button
								title='remove'
								onPress={() => handleRemoveLanguage(language)}
								buttonStyle={styles.removeButton}
								titleStyle={styles.removeButtonText}
							/>
						}
					</View>
				</TouchableWithoutFeedback>
			))}
			{!showAddLanguage
				? <TouchableOpacity
						style={styles.addLanguagesButton}
						onPress={toggleAddLanguage}
					>
						<View style={styles.iconContainer}>
							<Icon
								type='ionicon'
								name='md-add'
								iconStyle={styles.icon}
							/>
						</View>
						<Text style={styles.addLanguagesText}>Add languages...</Text>
					</TouchableOpacity>
				: <Input
						value={addLanguage}
						onChangeText={setAddLanguage}
						editable={true}
						placeholder='English'
						rightIcon={
							<Icon
								type='ionicon'
								name='md-add'
								iconStyle={styles.icon}
								onPress={handleAddLanguage}
							/>
						}
						rightIconContainerStyle={styles.iconContainer}
						containerStyle={styles.inputContainer}
						inputStyle={styles.input}
					/>
			}
		</View>
	)
}

export default Language