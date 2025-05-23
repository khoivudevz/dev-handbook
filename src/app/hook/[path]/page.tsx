import {TSearchParams} from '@/types/common.type'

import hooks from '@/data/hooks.data.json'
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
	const hook = hooks.find((hook) => hook.id === path)

	if (!hook) {
		return {
			title: 'Not Found',
			description: 'This hook does not exist.',
		}
	}

	return {
		title: hook.name,
		description: hook.code?.slice(0, 120) || 'Hook details page',
	}
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
