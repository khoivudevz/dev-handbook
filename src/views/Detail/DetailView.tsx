'use client'

import CodeBlock from '@/components/CodeBlock/CodeBlock'
import {Data} from '@/constants/common.constant'
import Title from './components/Title/Title'

type Props = {
	data: Data
}

const DetailView = ({data}: Props) => {
	return (
		<div className='space-y-[20px]'>
			<Title title={data.name} />

			<CodeBlock data={data.code} />
		</div>
	)
}

export default DetailView
