import constants from './constants.js'

export const apiData = (state=[], action) => {
	switch(action.type) {
		case constants.SET_APIDATA:
			return action.data
		default:
			return state
	}
}

export const loading = (state=[], action) => {
	switch(action.type) {
		case constants.SET_LOADING:
			return action.bool
		case constants.SET_APIDATA:
			return false
		default:
			return state
	}
}

export const timeSinceUpdate = (state=[], action) => {
	switch(action.type) {
		case constants.SET_APIDATA:
			return 0
		case constants.SET_TIME_SINCE_UPDATE:
			return action.n
		default:
			return state
	}
}

export const currency = (state=[], action) => {
	switch(action.type) {
		case constants.SET_CURRENCY:
			return action.currency
		default:
			return state
	}
}

export const sortBy = (state=[], action) => {
	switch(action.type) {
		case constants.SET_SORT_BY:
			return action.sortBy
		default:
			return state
	}

}

export const sortDirection = (state=[], action) => {
	switch(action.type) {
		case constants.SET_SORT_DIRECTION:
			return action.sortDirection
		default:
			return state
	}
}

export const currencySymbol = (state=[], action) => {
	switch(action.type) {
		case constants.SET_CURRENCY:
			return {
				JPY: '\u{000A5}',
				GBP: '£',
				USD: '$',
				EUR: '\u{020AC}',
				AUD: 'A$'
			}[action.currency]
		default:
			return state
	}
}