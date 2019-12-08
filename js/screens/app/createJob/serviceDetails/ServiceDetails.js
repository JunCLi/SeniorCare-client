import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_FORM_SERVICE_DETAILS } from '../../../../graphql/queries/createJobQueries'

import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { Formik } from 'formik'
import { styles } from './styles'

import StepCounter from '../formPosition/FormPosition'
import BottomButtons from '../bottomButtons/BottomButtons'
import Services from './services/Services'
import HouseholdNeeds from './householdneeds/HouseholdNeeds'

const ServiceDetails = props => {
	const { data } = useQuery(GET_JOB_FORM_SERVICE_DETAILS)
	const { position, ...formData } = data.getJobForm.serviceDetails

	const chooseRoute = formikProps => {
		switch (position.step) {
			case 1 :
				return <Services formikProps={formikProps} />
			case 2 :
				return <HouseholdNeeds formikProps={formikProps} />
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
										title='Service Details'
										totalSteps={position.totalSteps}
										currentStep={position.step}
									/>

									{ chooseRoute(formikProps)	}
								</ScrollView>
							</SafeAreaView>
							<BottomButtons
								section='serviceDetails'
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

export default ServiceDetails