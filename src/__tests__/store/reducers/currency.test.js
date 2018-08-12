import deepFreeze from 'deep-freeze'
import {currency} from '../../../store/reducers.js'
import constants from '../../../store/constants.js'

describe('CURRENCY Reducer', () => {
	it("SET_CURRENCY Success", () => {
		let state = {}
		let action = {
			type: constants.SET_CURRENCY,
			currency: 'JPY'
		}
		deepFreeze(state)
		deepFreeze(action)
		let result = currency(state, action)
		expect(result).toEqual('JPY')
	})
})