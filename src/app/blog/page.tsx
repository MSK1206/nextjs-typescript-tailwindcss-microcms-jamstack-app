import { getBlogList } from '@/app/_libs/microcms'
import { BLOG_LIST_LIMIT } from '../_constants'
import BlogList from '@/app/_components/BlogList'
import Pagination from '@/app/_components/Pagination'

// キャッシュを利用しない => SSRと同等
// キャッシュを〇秒間利用する => ISR同等

export const revalidate = 60

export default async function Page() {
  const data = await getBlogList({
    limit: BLOG_LIST_LIMIT
  })

  return (
    <div className="p-4">
      <BlogList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath="/blog" />
    </div>
  )
}
