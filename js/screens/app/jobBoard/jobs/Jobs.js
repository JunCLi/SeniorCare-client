import React from 'react'

import { Text, View } from 'react-native'
import { styles } from './styles'

import MyPostedJobs from '../../../../components/listItem/myPostedJobs/MyPostedJobs'

const Jobs = props => {
	console.log('props', props)
	const { jobs } = props

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.title}>Receiving Applicants ({jobs.length})</Text>
			{ jobs.map(job => (
				<MyPostedJobs
					key={job.id}
					job={job}
				/>
			))}
		</View>
	)
}

export default Jobs