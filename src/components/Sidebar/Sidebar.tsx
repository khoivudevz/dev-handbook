import Logo from '../Logo/Logo'
import SidebarList from './SidebarList/SidebarList'
import hooks from '@/data/hooks.data.json'
import {FaReact} from 'react-icons/fa'

const Sidebar = () => {
	return (
		<div className='hidden bg-sidebar desktop:flex h-dvh w-[20%] flex-col py-[10px] px-[30px] border-l border-neutral-700 border-dashed overflow-y-auto'>
			<Logo />
			<SidebarList
				title={
					<div className='flex items-center space-x-[10px]'>
						<p>React Hooks</p> <FaReact className='text-lg' />
					</div>
				}
				data={hooks}
			/>
		</div>
	)
}

export default Sidebar
