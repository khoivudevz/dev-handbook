'use client'

import useCopy from '@/hooks/useCopy'
import CodeEditor from '@uiw/react-textarea-code-editor'
import {FC} from 'react'
import {MdCheckCircle, MdCopyAll} from 'react-icons/md'

type Props = {
	data: string
	lang?: string
}

const CodeBlock: FC<Props> = ({data, lang = 'js'}) => {
	const {isCopied, copyToClipboard} = useCopy()
	return (
		<div className='relative'>
			<CodeEditor
				value={data}
				language={lang}
				placeholder='Please enter JS code.'
				padding={15}
				style={{
					borderRadius: '10px',
					border: '1px dashed #404040',
					backgroundColor: '#171717',
					fontFamily:
						'Fira Code, ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
				}}
				disabled
			/>

			<div className='absolute top-[20px] right-[20px] text-xl'>
				{isCopied ? (
					<MdCheckCircle className='text-green-500 ' />
				) : (
					<MdCopyAll
						className='text-white cursor-pointer'
						onClick={() => copyToClipboard(data)}
					/>
				)}
			</div>
		</div>
	)
}

export default CodeBlock
