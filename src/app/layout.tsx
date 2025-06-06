import type {Metadata} from 'next'
import {Fira_Code} from 'next/font/google'
import AppProvider from '@/providers/AppProvider'
import '@/styles/globals.css'
import {NextIntlClientProvider} from 'next-intl'
import {getLocale, getMessages} from 'next-intl/server'
import {NuqsAdapter} from 'nuqs/adapters/next/app'

import {ThemeProvider} from 'next-themes'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'
import SearchDataInput from '@/components/SearchDataInput/SearchDataInput'

const firaCode = Fira_Code({
	variable: '--font-fira-code',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Dev Playbook',
	description: 'React hooks, utils, storage and more',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale()
	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${firaCode.variable} ${firaCode.variable} antialiased`}>
				<NuqsAdapter>
					<AppProvider>
						<NextIntlClientProvider messages={messages}>
							<ThemeProvider
								attribute='class'
								defaultTheme='dark'
								enableSystem
								disableTransitionOnChange
							>
								<main className='relative container mx-auto desktop:flex'>
									<Sidebar />
									<Header />
									<div className='relative mt-[61px] desktop:mt-0 desktop:pt-[80px] w-full desktop:w-[70%] py-[10px] px-[10px] tablet:px-[30px] h-dvh desktop:border-x border-neutral-700 border-dashed overflow-y-auto'>
										<div className='desktop:block hidden absolute top-[20px] left-1/2 -translate-x-1/2 w-full h-full '>
											<SearchDataInput />
										</div>
										{children}
									</div>
								</main>
							</ThemeProvider>
						</NextIntlClientProvider>
					</AppProvider>
				</NuqsAdapter>
			</body>
		</html>
	)
}
