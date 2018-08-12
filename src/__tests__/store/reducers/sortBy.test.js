import deepFreeze from 'deep-freeze'
import {sortBy} from '../../../store/reducers.js'
import constants from '../../../store/constants.js'

describe("SORT_BY Reducer", () => {
	it("SET_SORT_BY Success", () => {
		let state = {}
		let action = {
			type: constants.SET_SORT_BY,
			sortBy: 'marketCap'
		}
		deepFreeze(state)
		deepFreeze(action)
		let result = sortBy(state, action)
		expect(result).toEqual('marketCap')
	})
})