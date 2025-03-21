import {TSearchParams} from '@/types/common.type'

import hooks from '@/data/hooks.data.json'
import {notFound} from 'next/navigation'
import DetailView from '@/views/Detail/DetailView'

type Props = {
	params: any
	searchParams: TSearchParams
}

const HookDetailPage = async ({params}: Props) => {
	const {path} = await params

	const hook = hooks.find((hook) => hook.id === path)

	if (!hook) {
		return notFound()
	}

	return <DetailView data={hook} />
}

export default HookDetailPage
