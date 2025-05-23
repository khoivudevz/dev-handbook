const Loading = () => {
	return (
		<div className='space-y-[20px] rounded-[10px] border-[1px] border-dashed border-[#404040] p-[15px] h-[calc(100dvh-160px)] w-full animate-pulse'>
			{Array.from({length: 5}).map((_, index) => (
				<div key={index} className='h-[15%] bg-[#404040] rounded w-full'></div>
			))}
		</div>
	)
}

export default Loading
