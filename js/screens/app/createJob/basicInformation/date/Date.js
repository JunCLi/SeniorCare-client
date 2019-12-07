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
		setFieldValue(selectType, date.dateString)
	}

	const getDateRange = (startDate, endDate) => {
		const periodStyle = {selected: true, color: '#244492', textColor: 'white' }

		const dateRange = {
			[startDate]: { ...periodStyle, startingDay: true },
			[endDate]: { ...periodStyle, endingDay: true },
		}

		if (startDate && endDate) {
			let start = moment(startDate).startOf('day').add(1, 'days')
			const end = moment(endDate).startOf('day')
			while (end.isAfter(start)) {
				Object.assign(dateRange, { [start.format('YYYY-MM-DD')]: periodStyle })
				start = start.add(1, 'days')
			}
		}

		return dateRange
	}

	useEffect(() => {
		setMarkedDates(getDateRange(values.startDate, values.endDate))
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
				// markedDates={getDateRange(values.startDate, values.endDate)}
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