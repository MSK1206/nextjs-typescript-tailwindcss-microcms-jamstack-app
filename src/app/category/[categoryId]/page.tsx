import { getBlogList, getCategoryDetail } from '@/app/_libs/microcms'
import { BLOG_LIST_LIMIT } from '@/app/_constants'
import BlogList from '@/app/_components/BlogList'
import Pagination from '@/app/_components/Pagination'

type Props = {
  params: {
    categoryId: string
  }
}

// キャッシュを利用しない => SSRと同等
// キャッシュを〇秒間利用する => ISR同等

export const revalidate = 60

export default async function Page({ params }: Props) {
  const { categoryId } = params
  const data = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    filters: `category[contains]${categoryId}`
  })
  return (
    <div className="p-4">
      <BlogList articles={data.contents} />
      <br />
      <Pagination
        totalCount={data.totalCount}
        basePath={`/category/${categoryId}`}
      />
    </div>
  )
}
