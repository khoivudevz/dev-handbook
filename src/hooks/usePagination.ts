import {useState} from 'react'

const usePagination = (defaultPage = 1, defaultPageSize = 10) => {
	const [page, setPage] = useState<number>(defaultPage)
	const [pageSize, setPageSize] = useState<number>(defaultPageSize)

	return {
		page,
		setPage,
		pageSize,
		setPageSize,
	}
}

export default usePagination
