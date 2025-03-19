import {FC} from 'react'

type Props = {
	lang?: any
}

const HomeView: FC<Props> = ({}) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			Hello, world
		</div>
	)
}

export default HomeView
