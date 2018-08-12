import deepFreeze from 'deep-freeze'
import {loading} from '../../../store/reducers.js'
import constants from '../../../store/constants.js'

describe("LOADING Reducer", ()=>{
	it("SET_LOADING success", () => {
		let state = {}
		let action = {
			type: constants.SET_LOADING,
			bool: true
		}
		deepFreeze(state)
		deepFreeze(action)
		let result = loading(state, action)
		expect(result).toEqual(true)
	})

	it("SET_APIDATA success",()=> {
		let state = {loading: true}
		let action = {
			type: constants.SET_APIDATA,
			data: []
		}
		deepFreeze(state)
		deepFreeze(action)
		let result = loading(state, action)
		expect(result).toEqual(false)
	})
})