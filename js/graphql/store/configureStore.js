import userStore from './userStore'
import caregiverStore from './caregiverStore'
import createJobStore from './createJobStore'

export default store = {
	...userStore,
	...caregiverStore,
	...createJobStore,
}