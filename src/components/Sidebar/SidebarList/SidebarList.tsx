import {Data} from '@/constants/common.constant'
import {FC} from 'react'
import SidebarItem from './SidebarItem/SidebarItem'

type Props = {
	title: React.ReactNode
	data: Data[]
}

const SidebarList: FC<Props> = ({title, data}) => {
	return (
		<div className='space-y-[20px] mt-[50px]'>
			<h3 className='text-lg font-bold'>{title}</h3>
			<ul className='space-y-[16px]'>
				{data.map((item) => (
					<SidebarItem data={item} key={item.name} />
				))}
			</ul>
		</div>
	)
}

export default SidebarList
