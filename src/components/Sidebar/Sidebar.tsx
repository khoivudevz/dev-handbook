import hooks from '@/data/hooks.data.json'
import utils from '@/data/utils.data.json'
import storages from '@/data/storage.data.json'
import Logo from '../Logo/Logo'
import SidebarList from './SidebarList/SidebarList'
import SidebarTitle from './SidebarTitle/SidebarTitle'

const Sidebar = () => {
	return (
		<div className='hidden bg-sidebar desktop:flex h-dvh w-[20%] flex-col py-[10px] px-[30px] border-l border-neutral-700 border-dashed overflow-y-auto'>
			<Logo />
			<SidebarList
				title={<SidebarTitle title='React Hooks' type='hook' />}
				data={hooks}
			/>
			<SidebarList
				title={<SidebarTitle title='Utils' type='util' />}
				data={utils}
			/>
			<SidebarList
				title={<SidebarTitle title='Storage' type='storage' />}
				data={storages}
			/>
		</div>
	)
}

export default Sidebar
