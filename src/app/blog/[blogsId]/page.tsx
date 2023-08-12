import { notFound } from 'next/navigation'
import parse from 'html-react-parser'
import { getBlogDetail, getBlogList } from '@/app/_libs/microcms'
import PublishedDate from '@/app/_components/Date'

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
