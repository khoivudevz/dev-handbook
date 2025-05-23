'use client'

import {useState, useMemo, useRef, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {Input} from '@/components/ui/input'
import hooksData from '@/data/hooks.data.json'
import utilsData from '@/data/utils.data.json'
import storageData from '@/data/storage.data.json'

const allData = [...hooksData, ...utilsData, ...storageData]

const SearchDataInput = () => {
	const [search, setSearch] = useState('')
	const router = useRouter()
	const inputRef = useRef<HTMLInputElement>(null)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const results = useMemo(() => {
		if (!search.trim()) return []
		return allData.filter(
			(item) =>
				item.name.toLowerCase().includes(search.toLowerCase()) ||
				item.id?.toLowerCase().includes(search.toLowerCase()) ||
				item.path?.toLowerCase().includes(search.toLowerCase())
		)
	}, [search])

	useEffect(() => {
		if (!search) return
		const handleClick = (e: MouseEvent) => {
			const input = inputRef.current
			const dropdown = dropdownRef.current
			if (
				input &&
				!input.contains(e.target as Node) &&
				dropdown &&
				!dropdown.contains(e.target as Node)
			) {
				setSearch('')
			}
		}
		document.addEventListener('mousedown', handleClick)
		return () => document.removeEventListener('mousedown', handleClick)
	}, [search])

	return (
		<div className='relative w-full max-w-md flex flex-col gap-4 items-center mx-auto'>
			<Input
				ref={inputRef}
				placeholder='Search for a snippet, hook, or topic...'
				className='bg-background border-border text-foreground'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{search && (
				<div
					ref={dropdownRef}
					className='w-full bg-card border border-border rounded-md shadow mt-2 max-h-60 overflow-auto z-10 absolute top-full'
				>
					{results.length > 0 ? (
						results.map((item) => (
							<div
								key={item.id}
								onClick={() => {
									router.push(item.path)
									setSearch('')
								}}
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

export default SearchDataInput
