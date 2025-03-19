'use client'

import useFetch from '@/hooks/useFetch'

const TestPage = () => {
	const {data, loading, refetchData} = useFetch(async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts')
		return res.json()
	}, [])

	console.log(data, loading)

	return (
		<div>
			<button
				onClick={() => {
					refetchData()
				}}
			>
				Test
			</button>
		</div>
	)
}

export default TestPage
