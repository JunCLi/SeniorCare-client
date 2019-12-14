import React from 'react'
import moment from 'moment'

import { Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements'
import { styles } from './styles'

const AllJobs = props => {
	const { family, jobDetails, handlePress } = props

	return (
		<TouchableOpacity
			style={styles.mainContainer}
			onPress={() => handlePress(
				jobDetails.id,
				jobDetails.basicInformation.title,
				family
			)}
		>
			<ListItem
				leftAvatar={
					<Avatar
						source={{ uri: family.avatar }}
						size='small'
						rounded
					/>
				}
				title={`${family.firstName} ${family.lastName.substring(0, 1)}.`}
				subtitle={`Posted ${moment(jobDetails.dateCreated).format('ll')}`}
				titleStyle={styles.familyInfoTitle}
				subtitleStyle={styles.familyInfoSubTitle}
				containerStyle={styles.familyInfoContainer}
			/>
			<Text style={styles.jobTitle}>{jobDetails.basicInformation.title}</Text>
			<View style={styles.locationRateContainer}>
				<View style={styles.infoContainer}>
					<Icon
						type='evilicon'
						name='location'
						iconStyle={styles.icon}
					/>
					<Text style={styles.location}>{jobDetails.basicInformation.location.city}</Text>
				</View>
				<View style={styles.infoContainer}>
					<Icon
						name='ios-timer'
						type='ionicon'
						iconStyle={styles.rateIcon}
					/>
					<Text style={styles.hourlyRate}>${jobDetails.basicInformation.hourlyRate}/hr</Text>
				</View>
			</View>
			<View style={styles.servicesContainer}>
				{jobDetails.serviceDetails.services.map(service => (
					<View key={service} style={styles.serviceBubble} >
						<Text style={styles.serviceText}>{service}</Text>
					</View>
				))}
			</View>
		</TouchableOpacity>
	)
}

export default AllJobs