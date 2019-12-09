import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_APPLICANTS } from '../../../../../graphql/queries/jobQueries'

import { Text, View } from 'react-native'
import { styles } from './styles'

import ApplicantItem from '../../../../../components/listItem/applicants/ApplicantItem'

const Applicants = props => {
	const { jobId } = props
	const { loading, data } = useQuery(GET_JOB_APPLICANTS, {
		variables: {
			jobId: jobId
		}
	})

	const handleMessage = caregiverId => {
		console.log('messaging: ', caregiverId)
	}

	const handleViewCaregiver = caregiverId => {
		console.log('see more details: ', caregiverId)
	}

	if (loading) return (
		<View>
			<Text>loading...</Text>
		</View>
	)

	return (
		<>
			{
				data.getApplicants.map(applicant => (
					<ApplicantItem
						key={applicant.userId}
						{...applicant}
						handleMessage={handleMessage}
						handleViewCaregiver={handleViewCaregiver}
					/>
				))
			}
		</>
	)
}

export default Applicants