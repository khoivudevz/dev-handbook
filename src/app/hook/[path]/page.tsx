import {TSearchParams} from '@/types/common.type'

import hooks from '@/data/hooks.data.json'
import {notFound} from 'next/navigation'
import HookDetailView from '@/views/HookDetailView/HookDetailView'

type Props = {
	params: {
		path: string
	}
	searchParams: TSearchParams
}

const HookDetailPage = async ({params}: Props) => {
	const {path} = await params

	const hook = hooks.find((hook) => hook.path === path)

	if (!hook) {
		return notFound()
	}

	return <HookDetailView data={hook} />
}

export default HookDetailPage
