import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_APPLIED_JOB } from '../../../../graphql/queries/jobQueries'

import { Text, View } from 'react-native'
import { styles } from './styles'

import AllJobs from '../../allJobs/AllJobs'

const MyApplications = props => {
	const { jobId } = props
	const { loading, data: applicationData } = useQuery(GET_APPLIED_JOB, {
		variables: {
			jobId
		}
	})

	const handleViewJobApp = (jobId, name, user) => {
		name = name ? name : 'Job Post'
		name = name.length > 25 ? `${name.substring(0, 20)}...` : name

		props.navigation.navigate('ViewJob', {
			jobId,
			name,
			user,
		})
	}

	if (loading) return (
		<>
		</>
	)

	const { family, jobDetails } = applicationData.getAppliedJob

	return (
		applicationData &&
			<AllJobs
				family={family}
				jobDetails={jobDetails}
				handlePress={handleViewJobApp}
			/>
	)
}

export default MyApplications