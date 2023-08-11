import Link from 'next/link'
import { getBlogList } from '@/app/_libs/microcms'

// キャッシュを利用しない
export const revalidate = 0

export default async function Page() {
  const { contents } = await getBlogList()

  // ページの生成された時間を取得
  const time = new Date().toLocaleString()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <div>
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
