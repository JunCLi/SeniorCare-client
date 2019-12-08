import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_FORM_BASIC_INFORMATION } from '../../../../graphql/queries/createJobQueries'

import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Formik } from 'formik'
import { styles } from './styles'

import StepCounter from '../formPosition/FormPosition'
import BottomButtons from '../bottomButtons/BottomButtons'
import Title from './title/Title'
import Date from './date/Date'
import Location from './location/Location'
import HourlyRate from './hourlyRate/HourlyRate'

const BasicInformation = props => {
	const { data } = useQuery(GET_JOB_FORM_BASIC_INFORMATION)
	const { position, ...formData } = data.getJobForm.basicInformation

	const chooseRoute = formikProps => {
		switch (position.step) {
			case 1 :
				return <Title formikProps={formikProps} />
			case 2 :
				return <Date formikProps={formikProps} />
			case 3 :
				return <Location formikProps={formikProps} />
			case 4 :
				return <HourlyRate formikProps={formikProps} />
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

				const payload = {
					...values
				}

				return (
					<>
						<KeyboardAvoidingView
							behavior={Platform.OS === "ios" ? "padding" : null}
							keyboardVerticalOffset={styles.keyboardOffset.margin}
							style={styles.avoidKeyboard}
						>
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
								payload={payload}
								currentPosition={position}
								navigation={props.navigation}
							/>
						</KeyboardAvoidingView>
					</>
				)
			}}
		</Formik>
	)
}

export default BasicInformation