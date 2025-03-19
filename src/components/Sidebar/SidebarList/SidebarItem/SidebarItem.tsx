'use client'

import {Data} from '@/constants/common.constant'
import useRouter from '@/hooks/useRouter'
import {cn} from '@/utils/cn.util'
import {usePathname} from 'next/navigation'
import {FC} from 'react'

type Props = {
	data: Data
}

const SidebarItem: FC<Props> = ({data}) => {
	const pathName = usePathname()
	const router = useRouter()

	return (
		<li
			onClick={() => router.push(`${data.path}`)}
			className={cn(
				pathName.includes(data.path) ? 'cursor-default' : 'cursor-pointer'
			)}
		>
			{pathName.includes(data.path) ? (
				<>
					{' '}
					<span className='absolute mx-auto  flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-base box-content font-extrabold text-transparent text-center select-none'>
						- {data.name}
					</span>
					<h1 className='relative top-0 w-fit h-auto  justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-base font-extrabold text-transparent text-center select-auto'>
						- {data.name}
					</h1>{' '}
				</>
			) : (
				<span className='text-base hover:font-extrabold transition-all duration-300'>
					- {data.name}
				</span>
			)}
		</li>
	)
}

export default SidebarItem
