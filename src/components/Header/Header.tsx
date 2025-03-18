import Logo from '../Logo/Logo'
import DrawerList from './DrawerList/DrawerList'
const Header = () => {
	return (
		<header className='desktop:hidden fixed top-0 left-0 w-full bg-black shadow-xl'>
			<div className='border-b border-neutral-700 border-dashed py-[10px] px-[10px] flex items-center justify-between'>
				<Logo />
				<DrawerList />
			</div>
		</header>
	)
}

export default Header
