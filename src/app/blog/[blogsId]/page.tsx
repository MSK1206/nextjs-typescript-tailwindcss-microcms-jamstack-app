import { notFound } from 'next/navigation'
import parse from 'html-react-parser'
import { getBlogDetail, getBlogList } from '@/app/_libs/microcms'
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

export default async function StaticDetailPage({
  params: { blogsId }
}: {
  params: { blogsId: string }
}) {
  const blogs = await getBlogDetail(blogsId)

  // ページの生成された時間を取得
  const time = `${dayjs
    .utc(blogs.publishedAt)
    .tz('Asia/Tokyo')
    .format('YYYY年MM月DD日')}`

  if (!blogs) {
    notFound()
  }

  return (
    <div>
      <h1>{blogs.title}</h1>
      <h2>{time}</h2>
      <div>{parse(blogs.content)}</div>
    </div>
  )
}
