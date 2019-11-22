import React, { useState } from 'react'

import { SafeAreaView, StatusBar, ScrollView, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from './styles'

const FilterFind = props => {
	const { clearSelection = false } = props

	console.log('clear selection? ', clearSelection)

	const [ clear, setClear ] = useState(clearSelection)

	// const handleClear = () => {
	// 	console.log('clearing all!!!!')
	// 	setClear(true)
	// }

	return (
		<>
			<SafeAreaView style={styles.backgroundBlue}>
				<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
				<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
					<View style={styles.optionsContainer}>
						<Text style={styles.title}>Gender</Text>
						<View style={styles.buttonsContainer}>
							<Button
								title='Female'
								buttonStyle={styles.button}
								titleStyle={styles.buttonTitle}
								onPress={() => console.log('clear selection? ', clearSelection)}
							/>
							<Button
								title='Male'
								buttonStyle={styles.button}
								titleStyle={styles.buttonTitle}
							/>
							<Button
								title='Other'
								buttonStyle={styles.button}
								titleStyle={styles.buttonTitle}
							/>
							<Button
								title='No Preference'
								buttonStyle={styles.button}
								titleStyle={styles.buttonTitle}
							/>
						</View>
					</View>
					<View style={styles.optionsContainer}>
						<Text style={styles.title}>Availabiltiy</Text>
						<View style={styles.buttonsContainer}>
							<Button
								title='Live in'
								buttonStyle={styles.button}
								titleStyle={styles.buttonTitle}
							/>
							<Button
								title='Live out'
								buttonStyle={styles.button}
								titleStyle={styles.buttonTitle}
							/>
						</View>
					</View>
					<View style={styles.optionsContainer}>
						<Text style={styles.title}>Maximum hourly rate</Text>
					</View>
					<View style={styles.optionsContainer}>
						<Text style={styles.title}>Minimum years of experience</Text>
					</View>

				</ScrollView>
			</SafeAreaView>

			<View>
				<Button
					title='See Results'
					buttonStyle={styles.submitButton}
					// onPress={handleSubmit}
					// disabled={isSubmitting}
					// disabledStyle={styles.submitDisabled}
					// disabledTitleStyle={styles.submitDisabledText}
				/>
			</View>
		</>
	)
}

FilterFind.navigationOptions = screenProps => {
	// const [ clear, setClear ] = useState(clearSelection)
	
	return {
		headerRight: <Button
			title='Clear All'
			buttonStyle={styles.clearAllButton}
			titleStyle={styles.clearAllTitle}
			onPress={() => screenProps.clearSelection = !screenProps.clearSelection}
		/>
	}
}

export default FilterFind