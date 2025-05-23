import {TSearchParams} from '@/types/common.type'

import utils from '@/data/utils.data.json'
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
	const util = utils.find((util) => util.id === path)

	if (!util) {
		return {
			title: 'Not Found',
			description: 'This hook does not exist.',
		}
	}

	return {
		title: util.name,
		description: util.code?.slice(0, 120) || 'Util details page',
	}
}

const UtilsDetailPage = async ({params}: Props) => {
	const {path} = await params

	const util = utils.find((util) => util.id === path)

	if (!util) {
		return notFound()
	}

	return <DetailView data={util} />
}

export default UtilsDetailPage
