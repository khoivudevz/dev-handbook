'use client'

import {Data} from '@/constants/common.constant'
import Title from './components/Title/Title'
import CodeEditor from '@uiw/react-textarea-code-editor'

type Props = {
	data: Data
}

const HookDetailView = ({data}: Props) => {
	return (
		<div className='space-y-[20px]'>
			<Title title={data.name} />

			<CodeEditor
				value={data.code}
				language='js'
				placeholder='Please enter JS code.'
				padding={15}
				style={{
					borderRadius: '10px',
					backgroundColor: '#171717',
					fontFamily:
						'Fira Code, ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
				}}
			/>
		</div>
	)
}

export default HookDetailView
