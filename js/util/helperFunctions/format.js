export const formatPhoneNumber = phoneNumberString => {
	const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
	const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
	const formatted = match.filter((number, index) => number && index > 0).join(' ')
	return formatted
}