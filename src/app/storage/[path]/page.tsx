import {TSearchParams} from '@/types/common.type'

import storages from '@/data/storage.data.json'
import {notFound} from 'next/navigation'
import DetailView from '@/views/Detail/DetailView'
import {Metadata} from 'next'

type Props = {
	params: any
	searchParams: TSearchParams
}

export async function generateMetadata({
	params,
}: {
	params: any
}): Promise<Metadata> {
	const {path} = await params
	const storage = storages.find((storage) => storage.id === path)

	if (!storage) {
		return {
			title: 'Not Found',
			description: 'This hook does not exist.',
		}
	}

	return {
		title: storage.name,
		description: storage.code?.slice(0, 120) || 'Storage details page',
	}
}

const StorageDetailPage = async ({params}: Props) => {
	const {path} = await params

	const storage = storages.find((storage) => storage.id === path)

	if (!storage) {
		return notFound()
	}

	return <DetailView data={storage} />
}

export default StorageDetailPage
