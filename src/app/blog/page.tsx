import Link from 'next/link'
import { getBlogList } from '@/app/_libs/microcms'
import PublishedDate from '../_components/Date'

// キャッシュを利用しない
export const revalidate = 0

export default async function Page() {
  const { contents } = await getBlogList()

  // ページの生成された時間を取得
  const utcDate = new Date().toUTCString()
  {
    /*const publishedDate = `${dayjs
    .utc(utcDate)
    .tz('Asia/Tokyo')
  .format('YYYY年MM月DD日')}`*/
  }

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <div className="flex items-center justify-center p-4">
      {/* <h2>{publishedDate}</h2> */}
      <PublishedDate date={utcDate} />
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
