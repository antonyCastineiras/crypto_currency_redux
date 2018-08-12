import storeFactory from '../store/store.js'
import * as actions from '../store/actions.js'

class LocalStorageMock {};
global.localStorage = new LocalStorageMock;


describe("setApiData", () => {
	
	const store = storeFactory()
	const apiData = [{},{},{}]

	beforeAll(()=> {
		store.dispatch(actions.setApiData(apiData))
	})

	it("should set the api data", ()=> 
		expect(store.getState().apiData).toEqual([{},{},{}])
	)

	it("should set the loading to false", () => {
		expect(store.getState().loading).toEqual(false)
	})

	it("should set the timeSinceUpdate to 0", () => {
		expect(store.getState().timeSinceUpdate).toEqual(0)
	})
})

describe("setLoading", () => {
	const store = storeFactory()

	beforeAll(()=> {
		store.dispatch(actions.setLoading(true))
	})

	it("should set the loading state", () => {
		expect(store.getState().loading).toBe(true)
	})
})

describe("setTimeSinceUpdate", () => {
	const store = storeFactory()

	beforeAll(() => {
		store.dispatch(actions.setTimeSinceUpdate(50))
	})

	it("should set the timeSinceUpdate", () => {
		expect(store.getState().timeSinceUpdate).toEqual(50)
	})
})

describe("setCurrency", () => {
	const store = storeFactory()

	beforeAll(() => {
		store.dispatch(actions.setCurrency('GBP'))
	})

	it("should set the currency", ()=> {
		expect(store.getState().currency).toEqual('GBP')
	})

	it("should set the currencySymbol", () => {
		expect(store.getState().currencySymbol).toEqual('£')
	})
})

describe('setSortBy', () => {
	const store = storeFactory()

	beforeAll(()=> {
		store.dispatch(actions.setSortBy('marketCap'))
	})

	it('sets the sortBy', () => {
		expect(store.getState().sortBy).toEqual('marketCap')
	})
})

describe('setSortDirection', () => {
	const store = storeFactory()

	beforeAll(()=> {
		store.dispatch(actions.setSortDirection('asc'))
	})

	it("sets the sortDirection", () => {
		expect(store.getState().sortDirection).toEqual('asc')
	})
})