import Image from 'next/image'
import { type Blogs } from '@/app/_libs/microcms'
import PublishedDate from '@/app/_components/Date'
import Category from '@/app/_components/Categories'
import { formatHighLight } from '@/app/_libs/highLight'

type Props = {
  data: Blogs
}

export default function Article({ data }: Props) {
  return (
    <main id="top" role="main">
      <div className="">
        <Category category={data.category} />
      </div>
      <PublishedDate date={data.publishedAt || data.createdAt} />
      <h1 className="mt-6 text-center font-bold text-[20px] max-[796px]:text-[calc(100%+5px)] max-[844px]:text-[calc(100%+10px)] max-[896px]:text-[calc(100%+15px)] max-[1366px]:text-[calc(100%+25px)]">
        {data.title}
      </h1>
      <p className="text-center mt-2">{data.description}</p>
      <br />
      <br />

      {data.thumbnail && (
        <Image
          src={`${data.thumbnail?.url}?txt=${data.title}&txt-size=45&txt-align=middle,center&txt-shad=5`}
          alt={data.title}
          className={'pt-2 pb-2'}
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
          role="img"
        />
      )}
      <div
        className="article"
        role="article"
        dangerouslySetInnerHTML={{
          __html: `${formatHighLight(data.content)}`
        }}
      />
    </main>
  )
}
