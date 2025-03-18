'use client'

import {useEffect} from 'react'
import {useState} from 'react'

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
	})

	useEffect(() => {
		const updateScreenSize = () => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		window.addEventListener('resize', updateScreenSize)
		updateScreenSize()

		return () => window.removeEventListener('resize', updateScreenSize)
	}, [])

	return screenSize
}

export default useScreenSize
