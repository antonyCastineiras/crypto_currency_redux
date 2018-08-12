import {createStore, combineReducers, applyMiddleware} from 'redux'
import { apiData, loading, timeSinceUpdate, currency, sortBy, sortDirection, currencySymbol } from './reducers'
import stateData from './initialState'



const logger = store => next => action =>{
	let result
	console.groupCollapsed("dispatching", action.type)
	console.log('prevs state', store.getState())
	console.log('action', action)
	result = next(action)
	console.log('next state', store.getState())
	console.groupEnd()
}

// const saver = store => next => action => {
// 	let result = next(action)
// 	localStorage['redux-store'] = JSON.stringify(store.getState())
// 	return result
// }

const storeFactory = (initialState=stateData) => 
	applyMiddleware(logger)(createStore)(
		combineReducers({ 
			apiData,
			loading,
			timeSinceUpdate,
			currency, 
			sortBy,
			sortDirection,
			currencySymbol
		}),
		initialState
	)

export default storeFactory