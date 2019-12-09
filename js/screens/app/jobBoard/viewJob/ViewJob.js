import React, { useState } from 'react'

import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { styles } from './styles'

import OrangeArc from '../../../../components/images/orangeArc/OrangeArc'
import ButtonTab from '../../../../components/buttons/buttonTabs/ButtonTab'
import Overview from './overview/Overview'
import Applicants from './applicants/Applicants'

const Jobs = props => {
	const { jobId, defaultPage } = props.navigation.state.params
	const [ selectedButton, setSelectedButton ] = useState(defaultPage)

	const buttonArray = [
		{
			title: 'Overview',
			value: 'overview',
		},
		{
			title: 'Applicants',
			value: 'applicant',
		},
	]

	const handleSelectButton = value => {
		setSelectedButton(value)
	}

	const displayRoute = buttonValue => {
		switch (buttonValue) {
			case 'applicant':
				return <Applicants jobId={jobId} />
		
			default:
				return <Overview jobId={jobId} />
		}
	}

	return (
		<SafeAreaView style={ selectedButton === 'applicant' ? styles.backgroundBlue : styles.background}>
			<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
			<OrangeArc />
			<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
				
				<ButtonTab
					buttonArray={buttonArray}
					selectedButton={selectedButton}
					handleSelectButton={handleSelectButton}
				/>

				{ displayRoute(selectedButton)}
			</ScrollView>
		</SafeAreaView>
	)
}

export default Jobs