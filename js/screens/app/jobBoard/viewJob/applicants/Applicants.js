import React from 'react'

import ApplicantItem from '../../../../../components/listItem/applicants/ApplicantItem'

const Applicants = props => {
	const { applicants } = props

	const handleMessage = caregiverId => {
		console.log('messaging: ', caregiverId)
	}

	const handleViewCaregiver = (caregiverId, userDetails, caregiverDetails) => {
		props.navigation.navigate('ViewCaregiver', {
			userId: caregiverId,
			userDetails,
			caregiverDetails,
		})
	}

	return (
		<>
			{
				applicants.map(applicant => (
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