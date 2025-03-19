type Props = {
	title: string
}

const Title = ({title}: Props) => {
	return (
		<div>
			<span className='absolute mx-auto  flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl box-content font-extrabold text-transparent text-center select-none'>
				{title}
			</span>
			<h1 className='relative top-0 w-fit h-auto  justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent text-center select-auto'>
				{title}
			</h1>
		</div>
	)
}

export default Title
