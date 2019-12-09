import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_DETAILED } from '../../../../../graphql/queries/jobQueries'

import { Text, View } from 'react-native' 

import SeniorDetails from '../../../../../components/jobDetails/seniorDetails/SeniorDetails'
import BasicInformation from '../../../../../components/jobDetails/basicInformation/BasicInformation'
import ServiceDetails from '../../../../../components/jobDetails/serviceDetails/ServiceDetails'
import HouseDetails from '../../../../../components/jobDetails/houseDetails/HouseDetails'
import CaregiverPreference from '../../../../../components/jobDetails/caregiverPreference/CaregiverPreference'

const Overview = props => {
	const { jobId } = props
	const { loading, data } = useQuery(GET_JOB_DETAILED, {
		variables: {
			id: jobId
		}
	})

	if (loading) return (
		<View>
			<Text>loading...</Text>
		</View>
	)

	const job = data.getJob

	return (
		<>
			<SeniorDetails {...job.seniorDetails} avatarPosition={'aboveHeader'} />

			<BasicInformation {...job.basicInformation} />

			<ServiceDetails {...job.serviceDetails} />

			<HouseDetails {...job.houseDetails} />

			<CaregiverPreference {...job.caregiverPreferences} />
		</>
	)
}

export default Overview