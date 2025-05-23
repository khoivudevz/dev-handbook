'use client'

import {useState, useMemo} from 'react'
import {useRouter} from 'next/navigation'
import {Input} from '@/components/ui/input'
import hooksData from '@/data/hooks.data.json'
import utilsData from '@/data/utils.data.json'
import storageData from '@/data/storage.data.json'

const allData = [...hooksData, ...utilsData, ...storageData]

const HomeSearchClient = () => {
	const [search, setSearch] = useState('')
	const router = useRouter()

	const results = useMemo(() => {
		if (!search.trim()) return []
		return allData.filter(
			(item) =>
				item.name.toLowerCase().includes(search.toLowerCase()) ||
				item.id?.toLowerCase().includes(search.toLowerCase()) ||
				item.path?.toLowerCase().includes(search.toLowerCase())
		)
	}, [search])

	return (
		<div className='w-full max-w-md flex flex-col gap-4 items-center'>
			<Input
				placeholder='Search for a snippet, hook, or topic...'
				className='bg-background border-border text-foreground'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{search && (
				<div className='w-full bg-card border border-border rounded-md shadow mt-2 max-h-60 overflow-auto z-10'>
					{results.length > 0 ? (
						results.map((item) => (
							<div
								key={item.id}
								onClick={() => router.push(item.path)}
								className='px-4 py-2 hover:bg-accent cursor-pointer border-b last:border-b-0 border-border'
							>
								<div className='font-semibold text-primary'>{item.name}</div>
								<div className='text-xs text-muted-foreground'>{item.path}</div>
							</div>
						))
					) : (
						<div className='px-4 py-2 text-muted-foreground text-sm'>
							No results found.
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default HomeSearchClient
