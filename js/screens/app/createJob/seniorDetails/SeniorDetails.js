import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_FORM_SENIOR_DETAILS } from '../../../../graphql/queries/jobQueries'

import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { Formik } from 'formik'
import { styles } from './styles'

import StepCounter from '../formPosition/FormPosition'
import BottomButtons from '../bottomButtons/BottomButtons'
import Name from './name/Name'
import Gender from './gender/Gender'
import Birthdate from './birthdate/Birthdate'

const SeniorDetails = props => {
	const { data } = useQuery(GET_JOB_FORM_SENIOR_DETAILS)
	const { position, ...formData } = data.getJobForm.seniorDetails

	const chooseRoute = formikProps => {
		switch (position.step) {
			case 1 :
				return <Name formikProps={formikProps} />
			case 2 :
				return <Gender formikProps={formikProps} />
			case 3 :
				return <Birthdate formikProps={formikProps} />
			// case 4 :
			// 	return <HourlyRate formikProps={formikProps} />
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
										title='Senior Details'
										totalSteps={position.totalSteps}
										currentStep={position.step}
									/>

									{ chooseRoute(formikProps)	}
								</ScrollView>
							</SafeAreaView>
							<BottomButtons
								section='seniorDetails'
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

export default SeniorDetails