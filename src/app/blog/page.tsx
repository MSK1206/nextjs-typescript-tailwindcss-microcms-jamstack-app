import Link from 'next/link'
import Image from 'next/image'
import { getBlogList } from '@/app/_libs/microcms'
import { BLOG_LIST_LIMIT } from '../_constants'
import BlogList from '../_components/BlogList'

// キャッシュを利用しない => SSRと同等
// キャッシュを〇秒間利用する => ISR同等

export const revalidate = 180

export default async function Page() {
  const data = await getBlogList({
    limit: BLOG_LIST_LIMIT
  })

  return (
    <div className="flex items-center justify-center p-4">
      <BlogList articles={data.contents} />
    </div>
  )
}
