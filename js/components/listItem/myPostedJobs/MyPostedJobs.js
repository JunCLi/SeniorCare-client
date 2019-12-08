import React from 'react'
import moment from 'moment'

import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'

const MyPostedJobs = props => {
	const { job } = props
	console.log('props: ', props)

	const formatDate = date => {
		return moment(date).format('ll')
	}

	const handleDisplayTitle = title => {
		return title.length > 35 ? `${title.substring(0, 35)}...` : title
	}

	return (
		<View style={styles.mainContainer}>
			<View style={styles.jobDetailsContainer}>
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
			</View>

			<View style={styles.jobApplicantsContainer}>
				<Text style={styles.numberApplicants}>0</Text>
				<Text style={styles.applicantText}>Applicants</Text>
			</View>

		</View>
	)
}

export default MyPostedJobs