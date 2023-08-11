import Link from 'next/link'
import { getBlogList, Blog } from '@/app/_libs/microcms'
import { BLOG_LIST_LIMIT } from '../_constants'
import { formatDate } from '../_libs/dayjsDate'

// キャッシュを利用しない
export const revalidate = 300

export default async function StaticPage() {
  const { contents } = await getBlogList()

  // ページの生成された時間を取得
  const time = new Date().toLocaleString()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <div className="flex items-center justify-center">
      <h1>{time}</h1>
      <ul>
        {contents.map((blogs) => {
          return (
            <li key={blogs.id}>
              <Link href={`/dynamic/${blogs.id}`}>{blogs.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
