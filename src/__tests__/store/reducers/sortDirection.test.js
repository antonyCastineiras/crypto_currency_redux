import deepFreeze from 'deep-freeze'
import {sortDirection} from '../../../store/reducers.js'
import constants from '../../../store/constants.js'

describe("SORT_DIRECTION Reducer", () => {
	it("SET_SORT_DIRECTION", () => {
		let state = {}
		let action = {
			type: constants.SET_SORT_DIRECTION,
			direction: "ASC"
		}
		deepFreeze(state)
		deepFreeze(action)
		let result = sortDirection(state,action)
		expect(result).toEqual()
	})
})