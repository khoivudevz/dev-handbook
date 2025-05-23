import Logo from '@/components/Logo/Logo'
import HomeSearchClient from './HomeSearchClient'

const HomeView = () => {
	return (
		<section className='flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4'>
			<Logo />
			<h1
				className='text-3xl md:text-5xl font-extrabold text-center'
				style={{color: 'var(--primary)'}}
			>
				Welcome to Dev Playbook
			</h1>
			<p className='max-w-xl text-center text-lg md:text-xl text-muted-foreground'>
				Your ultimate resource for code snippets, hooks, and best practices.
				Search, learn, and boost your productivity.
			</p>
			<HomeSearchClient />
		</section>
	)
}

export default HomeView
