'use client'

import {APP_URL} from '@/configs/app-url.config'
import {SCREEN_SIZE} from '@/constants/common.constant'
import {NotebookPen} from 'lucide-react'
import Link from 'next/link'
import {useEffect, useState} from 'react'

const LogoContent = ({size = 34}: {size?: number}) => (
	<div className='flex items-center space-x-[5px]'>
		<NotebookPen size={size} />
		<div className='text-sm desktop:text-lg font-bold'>
			<p>Dev</p>
			<p>Handbook</p>
		</div>
	</div>
)

const Logo = () => {
	const [isDesktop, setIsDesktop] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(
			`(min-width: ${SCREEN_SIZE.desktop}px)`
		)
		setIsDesktop(mediaQuery.matches)

		const handleResize = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
		mediaQuery.addEventListener('change', handleResize)

		return () => mediaQuery.removeEventListener('change', handleResize)
	}, [])

	return (
		<Link href={APP_URL.HOME}>
			<LogoContent size={isDesktop ? 48 : 34} />
		</Link>
	)
}

export default Logo
