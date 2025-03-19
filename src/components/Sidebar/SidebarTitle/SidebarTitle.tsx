'use client'

import {usePathname} from 'next/navigation'
import {FC} from 'react'

type Props = {
	title: string
	type: string
}

const SidebarTitle: FC<Props> = ({title, type}) => {
	const pathname = usePathname()

	return (
		<div className='flex items-center space-x-[10px] cursor-default'>
			{!pathname.includes(type) ? (
				<span className='text-xl text-white'>{title}</span>
			) : (
				<>
					<span className='absolute mx-auto  flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-xl box-content font-extrabold text-transparent text-center select-none'>
						{title}
					</span>
					<span className='relative top-0 w-fit h-auto  justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-xl font-extrabold text-transparent text-center select-auto'>
						{title}
					</span>
				</>
			)}
		</div>
	)
}

export default SidebarTitle
