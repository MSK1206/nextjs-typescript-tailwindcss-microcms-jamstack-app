import Image from 'next/image'
import { type Blogs } from '@/app/_libs/microcms'
import PublishedDate from '@/app/_components/Date'
import parse from 'html-react-parser'
import Category from '@/app/_components/Categories'

type Props = {
  data: Blogs
}

export default function Article({ data }: Props) {
  return (
    <main id="top">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div>
        <Category category={data.category} />
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail?.url}
          alt=""
          className=""
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      )}
      <div>{parse(data.content)}</div>
    </main>
  )
}
