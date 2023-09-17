import Image from 'next/image'
import { type Blogs } from '@/app/_libs/microcms'
import PublishedDate from '@/app/_components/Date'
import parse from 'html-react-parser'
import Category from '@/app/_components/Categories'
import { TagIcon } from '@heroicons/react/24/outline'

type Props = {
  data: Blogs
}

export default function Article({ data }: Props) {
  return (
    <main id="top" role="main">
      <h1
        className={
          'text-center font-bold text-[20px] max-[796px]:text-[calc(100%+5px)] max-[844px]:text-[calc(100%+10px)] max-[896px]:text-[calc(100%+15px)] max-[1366px]:text-[calc(100%+25px)]'
        }
      >
        {data.title}
      </h1>
      <p className={'text-center mt-2'}>{data.description}</p>
      <br />
      <br />
      <div className={'flex items-center'}>
        <TagIcon className="h-4 w-4 text-black" />
        <Category category={data.category} />
      </div>
      <PublishedDate date={data.publishedAt || data.createdAt} />
      {data.thumbnail && (
        <Image
          src={data.thumbnail?.url}
          alt=""
          className={'pt-2 pb-2'}
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
          role="img"
        />
      )}
      <div className={''} role="article">
        {parse(data.content)}
      </div>
    </main>
  )
}
