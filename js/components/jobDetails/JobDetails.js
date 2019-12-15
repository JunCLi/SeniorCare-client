import React from 'react'

import PosterInfo from './posterInfo/PosterInfo'
import SeniorDetails from './seniorDetails/SeniorDetails'
import BasicInformation from './basicInformation/BasicInformation'
import ServiceDetails from './serviceDetails/ServiceDetails'
import HouseDetails from './houseDetails/HouseDetails'
import CaregiverPreference from './caregiverPreference/CaregiverPreference'

const JobDetails = props => {
	const {
		job,
		user,
		name,
		posterInfo = true,
	} = props

	return (
		<>
			{posterInfo &&
				<PosterInfo jobTitle={name} user={user} />
			}

			<SeniorDetails {...job.seniorDetails} />

			<BasicInformation {...job.basicInformation} />

			<ServiceDetails {...job.serviceDetails} />

			<HouseDetails {...job.houseDetails} />

			<CaregiverPreference {...job.caregiverPreferences} />
		</>
	)
}

export default JobDetails