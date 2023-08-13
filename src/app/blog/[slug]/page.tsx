import { Metadata } from 'next'
import { getBlogDetail } from '@/app/_libs/microcms'
import Article from '@/app/_components/Article'

type Props = {
  params: {
    slug: string
  }
  searchParams: {
    dk: string
  }
}

export const revalidate = 60

export async function generateMetadata({
  params,
  searchParams
}: Props): Promise<Metadata> {
  const data = await getBlogDetail(params.slug, {
    draftKey: searchParams.dk
  })

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || '']
    }
  }
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getBlogDetail(params.slug, {
    draftKey: searchParams.dk
  })

  return <Article data={data} />
}
