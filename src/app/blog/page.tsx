import Link from 'next/link'
import { getBlogList } from '@/app/_libs/microcms'
import PublishedDate from '../_components/Date'
import Image from 'next/image'

// キャッシュを利用しない => SSRと同等
// キャッシュを〇秒間利用する => ISR同等

export const revalidate = 180

export default async function Page() {
  const { contents } = await getBlogList()

  // ページの生成された時間を取得
  const utcDate = new Date().toUTCString()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <div className="flex items-center justify-center p-4">
      <ul>
        {contents.map((blogs) => {
          return (
            <li key={blogs.id}>
              <Link href={`/blog/${blogs.id}`}>
                {blogs.thumbnail ? (
                  <Image
                    src={blogs.thumbnail?.url}
                    alt={blogs.title}
                    className=""
                    width={blogs.thumbnail?.width}
                    height={blogs.thumbnail?.height}
                  />
                ) : (
                  <Image
                    src={'/no-img.png'}
                    alt={'No-Image'}
                    className=""
                    width={1200}
                    height={630}
                  />
                )}
                <h1>{blogs.title}</h1>
                {blogs.category.map((category) => (
                  <li
                    className="inline-flex items-center justify-between"
                    key={category.id}
                  >
                    <span>{category.name}</span>
                  </li>
                ))}
                <PublishedDate date={utcDate} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
