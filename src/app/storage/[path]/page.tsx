import {TSearchParams} from '@/types/common.type'

import storages from '@/data/storage.data.json'
import {notFound} from 'next/navigation'
import DetailView from '@/views/Detail/DetailView'

type Props = {
	params: any
	searchParams: TSearchParams
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
