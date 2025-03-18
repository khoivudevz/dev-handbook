'use client'

import {APP_URL} from '@/configs/app-url.config'
import {Data} from '@/constants/common.constant'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {FC} from 'react'

type Props = {
	data: Data
}

const SidebarItem: FC<Props> = ({data}) => {
	const pathName = usePathname()

	return (
		<Link href={`${APP_URL.HOOK}/${data.path}`}>
			<li>
				{pathName.includes(data.path) ? (
					<>
						{' '}
						<span className='absolute mx-auto  flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-lg box-content font-extrabold text-transparent text-center select-none'>
							- {data.name}
						</span>
						<h1 className='relative top-0 w-fit h-auto  justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-lg font-extrabold text-transparent text-center select-auto'>
							- {data.name}
						</h1>{' '}
					</>
				) : (
					<span className='text-lg hover:font-extrabold transition-all duration-300'>
						- {data.name}
					</span>
				)}
			</li>
		</Link>
	)
}

export default SidebarItem
