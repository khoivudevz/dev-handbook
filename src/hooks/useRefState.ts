'use client'

import {useEffect, useRef, useState} from 'react'

const useRefState = <T>(initialValue: T) => {
	const [state, setState] = useState<T>(initialValue)

	const ref = useRef<T>(initialValue)

	useEffect(() => {
		ref.current = state
	}, [state])

	return {state, setState, ref}
}

export default useRefState
