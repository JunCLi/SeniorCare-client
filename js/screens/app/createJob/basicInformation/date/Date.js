import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { Text, TouchableOpacity, View } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { styles } from './styles'

const Date = props => {
	const { values, handleChange, setFieldValue } = props.formikProps
	const [ selectType, setSelectType ] = useState('startDate')
	const [ markedDates, setMarkedDates ] = useState({})

	
	const handleSwitchSelectType = type => {
		setSelectType(type)
	}

	const handleDisplaySelectType = (selector, selectedStyle, normalStyle) => {
		return selectType === selector ? selectedStyle : normalStyle
	}

	const handleDateClick = date => {
		// console.log('date', date)
		setFieldValue(selectType, date.dateString)
	}

	const convertValues = (startDate, endDate) => {
		console.log('startDate:', startDate, 'endDate:', endDate )
		const dateArray = startDate.split('-')
		console.log('dateArray: ', dateArray)
	}

	useEffect(() => {
		// console.log('values start:', values.startDate)
		convertValues(values.startDate, values.endDate)

		// console.log('values end:', typeof values.endDate)
		setMarkedDates({
			// ...markedDates,
			[values.startDate]: { startingDay: true, color: '#244492', textColor: 'white'},
			[values.endDate]: { endingDay: true, color: '#244492', textColor: 'white'},
		})
	}, [values.startDate, values.endDate])

	return (
		<View>
			<View style={styles.selectDateContainer}>
				<TouchableOpacity
					style={handleDisplaySelectType('startDate', styles.selectedTextContainer, styles.textContainer)}
					onPress={() => handleSwitchSelectType('startDate')}
				>
					<Text
						style={handleDisplaySelectType('startDate', styles.selectedTitleText, styles.titleText)}
					>Start Date</Text>
					<Text
						style={handleDisplaySelectType('startDate', styles.selectedDateText, styles.dateText)}
					>{moment(values.startDate).format('MMM Do')}</Text>

				</TouchableOpacity>
				<TouchableOpacity
					style={handleDisplaySelectType('endDate', styles.selectedTextContainer, styles.textContainer)}
					onPress={() => handleSwitchSelectType('endDate')}
				>
					<View style={styles.endDateContainer}>
						<View>
							<Text
								style={handleDisplaySelectType('endDate', styles.selectedTitleText, styles.titleText)}
							>End Date</Text>
							<Text style={styles.optional}>*optional</Text>
						</View>
						<View style={styles.endDateContainer}>
							<Text
								style={handleDisplaySelectType('endDate', styles.selectedDateText, styles.dateText)}
							>{values.endDate ? moment(values.endDate).format('MMM Do') : ''}</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
			<Calendar
				onDayPress={day => handleDateClick(day)}
				markedDates={markedDates}
				// markedDates={{
					
				// 	'2019-12-04': { startingDay: true, color: 'green'},
				// 	'2019-12-05': { color: 'green', },
				// 	'2019-12-20': { endingDay: true, color: 'green', }
				// }}
				markingType='period'
			/>
		</View>
	)
}

export default Date