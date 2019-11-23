import userStore from './userStore'
import caregiverStore from './caregiverStore'

export default store = {
	...userStore,
	...caregiverStore,
	checkStuff: {
		thing: 'Something to test',
		otherThing: 'Some other thing',
		__typename: 'stuff'
	}
}