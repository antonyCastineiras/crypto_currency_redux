import constants from '../../../store/constants.js'
import {apiData} from '../../../store/reducers.js'
import deepFreeze from 'deep-freeze'

describe("APIDATA Reducer", () => {
	it("SET_APIDATA success", () => {
		const state = {}
		const action = {
			type: constants.SET_APIDATA,
			data: [1,2,3,4,5]
		}
		deepFreeze(state)
		deepFreeze(action)
		const result = apiData(state, action)
		expect(result)
			.toEqual([1,2,3,4,5])
	})
})