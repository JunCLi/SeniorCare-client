import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_FORM_BASIC_INFORMATION } from '../../../../graphql/queries/jobQueries'

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Avatar, Button, Image, ListItem } from 'react-native-elements'
import { Formik } from 'formik'
import { styles } from './styles'

import StepCounter from '../formPosition/FormPosition'
import BottomButtons from '../bottomButtons/BottomButtons'
import Title from './title/Title'
import Date from './date/Date'

const BasicInformation = props => {
	const { data } = useQuery(GET_JOB_FORM_BASIC_INFORMATION)
	const { position, ...formData } = data.getJobForm.basicInformation

	// position.step = 2

	const chooseRoute = formikProps => {
		switch (position.step) {
			case 1 :
				return <Title formikProps={formikProps} />
			case 2 :
				return <Date formikProps={formikProps} />
			case 3 :
				return <Title formikProps={formikProps} />
			case 4 :
				return <Title formikProps={formikProps} />
			default:
			break;
		}
	}


	const initialValues = {
		...formData
	}

	return (
		<Formik
			initialValues={initialValues} 
		>
			{formikProps => {
				const {
					values,
					touched,
					errors,
					dirty,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit,
					handleReset,
					setFieldValue,
				} = formikProps

				return (
					<>
						<SafeAreaView style={styles.backgroundBlue}>
							<StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle='dark-content' />
							<ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollViewContainer}>
								<StepCounter
									title='Basic Information'
									totalSteps={position.totalSteps}
									currentStep={position.step}
								/>

								{ chooseRoute(formikProps)	}
							</ScrollView>
						</SafeAreaView>
						<BottomButtons
							section='basicInformation'
							currentPosition={position}
							navigation={props.navigation}
						/>
					</>
				)
			}}
		</Formik>
	)
}

export default BasicInformation