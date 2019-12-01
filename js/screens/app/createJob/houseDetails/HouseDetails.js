import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_FORM_HOUSE_DETAILS } from '../../../../graphql/queries/jobQueries'

import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { Formik } from 'formik'
import { styles } from './styles'

import StepCounter from '../formPosition/FormPosition'
import BottomButtons from '../bottomButtons/BottomButtons'
import Options from './options/Options'

const HouseDetails = props => {
	const { data } = useQuery(GET_JOB_FORM_HOUSE_DETAILS)
	const { position, ...formData } = data.getJobForm.houseDetails

	const chooseRoute = formikProps => {
		switch (position.step) {
			case 1 :
				return <Options formikProps={formikProps} />
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
										title='House Details'
										totalSteps={position.totalSteps}
										currentStep={position.step}
									/>

									{ chooseRoute(formikProps)	}
								</ScrollView>
							</SafeAreaView>
							<BottomButtons
								section='houseDetails'
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

export default HouseDetails