import { getBlogDetail, getBlogList } from '@/app/_libs/microcms'
import parse from 'html-react-parser'
import PublishedDate from '@/app/_components/Date'
import { notFound } from 'next/navigation'

// キャッシュを利用しない => SSRと同等
// キャッシュを〇秒間利用する => ISR同等

export const revalidate = 180

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
  const utcDate = new Date().toUTCString()

  if (!blogs) {
    notFound()
  }

  return (
    <div>
      <h1>{blogs.title}</h1>
      <PublishedDate date={utcDate} />
      <div>{parse(blogs.content)}</div>
    </div>
  )
}
