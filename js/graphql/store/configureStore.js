import userStore from './userStore'

export default store = {
	...userStore,
	checkStuff: {
		thing: 'Something to test',
		otherThing: 'Some other thing',
		__typename: 'stuff'
	}
}