import Sheet from '@/app/_components/Sheet'
import Hero from '@/app/_components/Hero'
import {
  MetaTitleTemplate as TitleTemplate,
  MetaDynamicCategoryTitle as Title
} from '@/app/_components/MetaTitles'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata = {
  title: `${Title} - ${TitleTemplate}`,
  description: 'カテゴリ検索結果ページ'
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title={'Category'} sub={'カテゴリ'} />
      <Sheet>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Sheet>
    </>
  )
}
