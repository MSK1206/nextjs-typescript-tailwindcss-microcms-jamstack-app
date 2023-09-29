import Sheet from '@/app/_components/Sheet'
import Hero from '@/app/_components/Hero'
import {
  MetaTitleTemplate as TitleTemplate,
  MetaDynamicCategoryTitle as Title
} from '@/app/_components/MetaTitles'
import { Suspense } from 'react'
import Loading from './loading'
import { getCategoryDetail } from '@/app/_libs/microcms'

export const metadata = {
  title: `${Title} - ${TitleTemplate}`,
  description: 'カテゴリ検索結果ページ'
}

type Props = {
  children: React.ReactNode
  params: {
    categoryId: string
  }
}

export default async function RootLayout({ children, params }: Props) {
  const { categoryId } = params
  const Category = await getCategoryDetail(categoryId)
  return (
    <>
      <Hero title={'Category'} sub={`${Category.name}の記事一覧`} />
      <Sheet>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Sheet>
    </>
  )
}
