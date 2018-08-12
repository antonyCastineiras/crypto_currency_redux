import deepFreeze from 'deep-freeze'
import {currencySymbol} from '../../../store/reducers.js'
import constants from '../../../store/constants.js'

describe("CURRENCY_SYMBOL Reducer", () => {
	it("SET_CURRENCY to yen Success", () => {
		let state = {}
		let action = {
			type: constants.SET_CURRENCY,
			currency: 'JPY'
		}
		deepFreeze(state)
		deepFreeze(action)
		let result = currencySymbol(state, action)
		expect(result).toEqual('\u{000A5}')
	})

	it("SET_CURRENCY to GBP Success", () => {
		let state = {}
		let action = {
			type: constants.SET_CURRENCY,
			currency: 'GBP'
		}
		deepFreeze(state)
		deepFreeze(action)
		let result = currencySymbol(state, action)
		expect(result).toEqual('£')
	})

	it("SET_CURRENCY to USD Success", () => {
		let state = {}
		let action = {
			type: constants.SET_CURRENCY,
			currency: 'USD'
		}
		deepFreeze(state)
		deepFreeze(action)
		let result = currencySymbol(state, action)
		expect(result).toEqual('$')
	})

	it("SET_CURRENCY to EUR Success", () => {
		let state = {}
		let action = {
			type: constants.SET_CURRENCY,
			currency: 'EUR'
		}
		deepFreeze(state)
		deepFreeze(action)
		let result = currencySymbol(state, action)
		expect(result).toEqual('\u{020AC}')
	})

	it("SET_CURRENCY to AUD Success", () => {
		let state = {}
		let action = {
			type: constants.SET_CURRENCY,
			currency: 'AUD'
		}
		deepFreeze(state)
		deepFreeze(action)
		let result = currencySymbol(state, action)
		expect(result).toEqual('A$')
	})
})

