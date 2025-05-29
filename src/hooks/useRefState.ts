import isEqual from 'lodash/isEqual'
import {useEffect, useRef, useState} from 'react'

const useRefState = <T>(initialValue: T) => {
	const [state, setState] = useState<T>(initialValue)
	const ref = useRef<T>(initialValue)

	useEffect(() => {
		ref.current = state
	}, [state])

	useEffect(() => {
		if (!isEqual(ref.current, initialValue)) {
			setState(initialValue)
		}
	}, [initialValue])

	return {state, setState, ref}
}

export default useRefState
