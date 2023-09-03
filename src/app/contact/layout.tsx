import Sheet from '@/app/_components/Sheet'
import Hero from '@/app/_components/Hero'
import {
  MetaTitleTemplate as TitleTemplate,
  MetaContactTitle as Title
} from '@/app/_components/MetaTitles'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata = {
  title: `${Title} | ${TitleTemplate}`,
  description: 'MSK1206のお問い合わせページ'
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title={'Contact'} sub={'お問い合わせ'} />
      <Sheet>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Sheet>
    </>
  )
}
