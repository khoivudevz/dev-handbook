'use client'

import {useState} from 'react'

type JSONObject = {
	[key: string]: any
}

const useMutation = <T extends JSONObject>() => {
	const [data, setData] = useState<T | null>(null)
	const [error, setError] = useState<Error | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	const mutate = async (mutateFunction: () => Promise<T>, cb?: () => void) => {
		setLoading(true)
		setError(null)

		try {
			const result = await mutateFunction()
			if (!result) return
			setData(result)
			if (cb) {
				cb()
			}
		} catch (err) {
			setError(err as Error)
			throw err
		} finally {
			setLoading(false)
		}
	}

	return {mutate, data, error, loading}
}

export default useMutation
