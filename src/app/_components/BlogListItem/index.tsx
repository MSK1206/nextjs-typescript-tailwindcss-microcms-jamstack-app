import Link from 'next/link'
import Image from 'next/image'
import { Blogs } from '@/app/_libs/microcms'
import PublishedDate from '@/app/_components/Date'
import InfoTag from '@/app/_components/InfoTag'
import styles from './index.module.css'

type Props = {
  blogs: Blogs
}

export default function BlogListItem({ blogs }: Props) {
  // ページの生成された時間を取得
  const utcDate = new Date().toUTCString()
  return (
    <li className="border-solid border-b border-b-gray-300 last:border-b-[0]">
      <Link href={`/blog/${blogs.id}`} className={styles.bloglist} as="style">
        {blogs?.thumbnail ? (
          <Image
            src={blogs.thumbnail?.url}
            alt={blogs.title}
            className={`w-[200px] h-auto rounded max-sm:hidden ${styles.image}`}
            width={blogs.thumbnail?.width}
            height={blogs.thumbnail?.height}
            priority
          />
        ) : (
          <Image
            src={'/no-img.jpg'}
            alt={'No-Image'}
            className="w-[200px] h-auto rounded max-sm:hidden"
            width={1200}
            height={630}
            priority
          />
        )}
        <dl className={styles.publishdesc}>
          <dt className="text-[1rem] font-bold">{blogs.title}</dt>
          <dd className="flex items-center gap-4">
            <InfoTag infotag={blogs.infotag} />
            <PublishedDate date={utcDate} />
          </dd>
        </dl>
      </Link>
    </li>
  )
}
