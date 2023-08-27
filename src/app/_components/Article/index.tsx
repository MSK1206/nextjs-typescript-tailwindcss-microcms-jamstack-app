import Image from 'next/image'
import { type Blogs } from '@/app/_libs/microcms'
import PublishedDate from '@/app/_components/Date'
import parse from 'html-react-parser'
import Category from '@/app/_components/Categories'
import cx from 'classnames'

type Props = {
  data: Blogs
}

export default function Article({ data }: Props) {
  return (
    <main id="top">
      <h1
        className={cx(
          'text-center font-bold text-[20px] md:text-30px',
          {}
        )}
      >
        {data.title}
      </h1>
      <p className={cx('text-center mt-1', {})}>{data.description}</p>
      <div className={cx('', {})}>
        <Category category={data.category} />
      </div>
      <PublishedDate date={data.publishedAt || data.createdAt} />
      {data.thumbnail && (
        <Image
          src={data.thumbnail?.url}
          alt=""
          className={cx('pt-2 pb-2', {})}
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      )}
      <div className={cx('', {})}>{parse(data.content)}</div>
    </main>
  )
}
