'use client'

import {useCallback, useEffect, useReducer} from 'react'

type State<T> = {
	data: T | null
	loading: boolean
	error: Error | null
}

type Action<T> =
	| {type: 'FETCH_START'}
	| {type: 'FETCH_SUCCESS'; payload: T}
	| {type: 'FETCH_ERROR'; payload: Error}
	| {type: 'SET_LOADING'; payload: boolean}

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
	switch (action.type) {
		case 'FETCH_START':
			return {...state, loading: true, error: null}
		case 'FETCH_SUCCESS':
			return {data: action.payload, loading: false, error: null}
		case 'FETCH_ERROR':
			return {data: null, loading: false, error: action.payload}
		case 'SET_LOADING':
			return {...state, loading: action.payload}
		default:
			return state
	}
}

const useFetch = <T>(
	fetchFunction: () => Promise<T> | null,
	dependencies: ReadonlyArray<unknown> = [],
	searchParams?: URLSearchParams
) => {
	const [state, dispatch] = useReducer(reducer<T>, {
		data: null,
		loading: true,
		error: null,
	})

	const fetchData = useCallback(async () => {
		dispatch({type: 'FETCH_START'})
		try {
			const response = await fetchFunction()
			if (!response) {
				throw new Error('No response')
			}
			dispatch({type: 'FETCH_SUCCESS', payload: response})
		} catch (error) {
			dispatch({type: 'FETCH_ERROR', payload: error as Error})
		}
	}, [fetchFunction])

	const refetchData = useCallback(() => {
		fetchData()
	}, [fetchData])

	useEffect(() => {
		if (searchParams && !searchParams.size) {
			dispatch({type: 'SET_LOADING', payload: false})
			return
		}

		fetchData()
	}, [...dependencies, searchParams])

	return {
		data: state.data,
		loading: state.loading,
		error: state.error,
		refetchData,
	}
}

export default useFetch
