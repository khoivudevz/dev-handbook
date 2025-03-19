import {TSearchParams} from '@/types/common.type'

import utils from '@/data/utils.data.json'
import {notFound} from 'next/navigation'
import DetailView from '@/views/Detail/DetailView'

type Props = {
	params: any
	searchParams: TSearchParams
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
