import { getBlogList } from '@/app/_libs/microcms'
import { BLOG_LIST_LIMIT } from '@/app/_constants'
import BlogList from '@/app/_components/BlogList'
import Pagination from '@/app/_components/Pagination'

type Props = {
  params: {
    current: string
  }
}

// revalidate
// キャッシュを利用しない => SSRと同等
// キャッシュを〇秒間利用する => ISR同等

export const revalidate = 60

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10)
  const data = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    offset: BLOG_LIST_LIMIT * (current - 1)
  })

  return (
    <div className="p-4">
      <BlogList articles={data.contents} />
      <br />
      <Pagination
        totalCount={data.totalCount}
        current={current}
        basePath="/blog"
      />
    </div>
  )
}
