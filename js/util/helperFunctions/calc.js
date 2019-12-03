import moment from 'moment'

export const calcAge = birthdate => {
	return moment().diff(moment(birthdate, 'YYYYMMDD'), 'years')
}
