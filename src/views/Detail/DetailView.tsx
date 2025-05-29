'use client'

import CodeBlock from '@/components/CodeBlock/CodeBlock'
import {Data} from '@/constants/common.constant'
import Title from './components/Title/Title'

type Props = {
	data: Data
}

const DetailView = ({data}: Props) => {
	return (
		<div className='space-y-[60px]'>
			<div className='space-y-[20px]'>
				<Title title={data.name} />
				<CodeBlock data={data.code} />
			</div>

			<div>
				{data.subTitle && (
					<div className='text-sm text-gray-500 mb-[20px]'>{data.subTitle}</div>
				)}
				{data.sub && <CodeBlock data={data.sub} />}
			</div>

			<div>
				{data.example && (
					<>
						<div className='text-sm text-gray-500 mb-[20px]'>Example</div>
						<CodeBlock data={data.example} />
					</>
				)}
			</div>
		</div>
	)
}

export default DetailView
