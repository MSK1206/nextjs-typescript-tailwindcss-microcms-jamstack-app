import Link from 'next/link'
import { getBlogList } from '@/app/_libs/microcms'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

// キャッシュを利用しない
export const revalidate = 0

export async function generateStaticParams() {
  const { contents } = await getBlogList()

  const paths = contents.map((blogs) => {
    return {
      blogsId: blogs.id
    }
  })

  return [...paths]
}

export default async function Page() {
  const { contents } = await getBlogList()

  // ページの生成された時間を取得
  const time = `${dayjs
    .utc(new Date().toUTCString())
    .tz('Asia/Tokyo')
    .format('YYYY年MM月DD日')}`

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <div className="">
      <h1>{time}</h1>
      <ul>
        {contents.map((blogs) => {
          return (
            <li key={blogs.id}>
              <Link href={`/blog/${blogs.id}`}>{blogs.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
