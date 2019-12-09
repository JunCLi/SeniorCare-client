import React from 'react'

import SeniorDetails from '../../../../../components/jobDetails/seniorDetails/SeniorDetails'
import BasicInformation from '../../../../../components/jobDetails/basicInformation/BasicInformation'
import ServiceDetails from '../../../../../components/jobDetails/serviceDetails/ServiceDetails'
import HouseDetails from '../../../../../components/jobDetails/houseDetails/HouseDetails'
import CaregiverPreference from '../../../../../components/jobDetails/caregiverPreference/CaregiverPreference'

const Overview = props => {
	const { job } = props

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