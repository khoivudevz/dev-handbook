'use client'

import Logo from '@/components/Logo/Logo'
import SidebarList from '@/components/Sidebar/SidebarList/SidebarList'
import SidebarTitle from '@/components/Sidebar/SidebarTitle/SidebarTitle'
import {Button} from '@/components/ui/button'
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import hooks from '@/data/hooks.data.json'
import storages from '@/data/storage.data.json'
import utils from '@/data/utils.data.json'
import {MenuIcon} from 'lucide-react'
const DrawerList = () => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant='outline'>
					<MenuIcon />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className='mx-auto w-full max-w-sm'>
					<DrawerHeader>
						<DrawerTitle>
							<Logo />
						</DrawerTitle>
						<DrawerDescription>
							React Hooks, Utils, and Storage
						</DrawerDescription>
					</DrawerHeader>
					<section className='max-h-[400px] overflow-y-auto pb-[40px]'>
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
					</section>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default DrawerList
