import deepFreeze from 'deep-freeze'
import {timeSinceUpdate} from '../../../store/reducers.js'
import constants from '../../../store/constants.js'

describe('TIME_SINCE_UPDATE Reducer', () => {
	it('SET_APIDATA Success', () => {
		let state = {}
		let action = {
			type: constants.SET_APIDATA,
			data: []
		}
		deepFreeze(state)
		deepFreeze(action)
		let result = timeSinceUpdate(state, action)
		expect(result).toEqual(0)
	})
})