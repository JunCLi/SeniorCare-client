import React from 'react'
import moment from 'moment'

import { useQuery } from '@apollo/react-hooks'
import { GET_JOB_APPLICANT_NUMBERS } from '../../../graphql/queries/jobQueries'

import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

const MyPostedJobs = props => {
	const { job, handleViewJob } = props
	const { data: applicantsData } = useQuery(GET_JOB_APPLICANT_NUMBERS, {
		variables: {
			jobId: job.id
		}
	})

	const handleDisplayApplicants = () => {
		return applicantsData ? applicantsData.getApplicants.length : 0
	}

	const handlePress = defaultPage => {
		handleViewJob(job.id, job.basicInformation.title, defaultPage)
	}

	const formatDate = date => {
		return moment(date).format('ll')
	}

	const handleDisplayTitle = title => {
		return title.length > 35 ? `${title.substring(0, 35)}...` : title
	}

	return (
		<View style={styles.mainContainer}>
			<TouchableOpacity
				style={styles.jobDetailsContainer}
				onPress={() => handlePress('overview')}
			>
				<View>
					<Text style={styles.postedDate}>Posted {formatDate(job.dateCreated)}</Text>
					<Text style={styles.title}>{handleDisplayTitle(job.basicInformation.title)}</Text>
				</View>
				<View>
					<Text style={styles.seniorName}>For {job.seniorDetails.name}</Text>
					<View style={styles.detailsContainer}>
						<View style={styles.detailsInnerContainer}>
							<Icon
								type='antdesign'
								name='calendar'
								iconStyle={styles.icon}
							/>
							<Text style={styles.detailsText}>Starts {formatDate(job.basicInformation.startDate)}</Text>
						</View>
						<View style={styles.detailsInnerContainer}>
							<Icon
								name='ios-timer'
								type='ionicon'
								iconStyle={styles.icon}
							/>
							<Text style={styles.detailsText}>${job.basicInformation.hourlyRate}/hr</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.jobApplicantsContainer}
				onPress={() => handlePress('applicant')}
			>
				<Text style={styles.numberApplicants}>{handleDisplayApplicants()}</Text>
				<Text style={styles.applicantText}>Applicants</Text>
			</TouchableOpacity>

		</View>
	)
}

export default MyPostedJobs