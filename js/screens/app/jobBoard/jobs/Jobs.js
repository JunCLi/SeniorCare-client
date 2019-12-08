import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import MyPostedJobs from '../../../../components/listItem/myPostedJobs/MyPostedJobs'

const Jobs = props => {
	const { jobs } = props

	const handleViewJob = (jobId, title, defaultPage) => {
		props.navigation.navigate('ViewJob', {
			jobId,
			title,
			defaultPage,
		})
	}

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.title}>Receiving Applicants ({jobs.length})</Text>
			{ jobs.map(job => (
				<MyPostedJobs
					key={job.id}
					job={job}
					handleViewJob={handleViewJob}
				/>
			))}
		</View>
	)
}

export default Jobs