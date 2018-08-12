import constants from './constants.js'

export const setApiData = (data=[]) => ({
	type: constants.SET_APIDATA,
	data: data
})

export const setLoading = (bool) => ({
	type: constants.SET_LOADING,
	bool: bool
})

export const setTimeSinceUpdate = (n) => ({
	type: constants.SET_TIME_SINCE_UPDATE,
	n: n
})

export const setCurrency = (currency) => ({
	type: constants.SET_CURRENCY,
	currency: currency
})

export const setSortBy = (sortBy) => ({
	type: constants.SET_SORT_BY,
	sortBy: sortBy
})

export const setSortDirection = (sortDirection) => ({
	type: constants.SET_SORT_DIRECTION,
	sortDirection: sortDirection
})