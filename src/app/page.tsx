import Image from 'next/image'
import { Metadata } from 'next'
import { getMeta } from '@/app/_libs/microcms'
import { MetaRootPageTitle as Title } from '@/app/_components/MetaTitles'
import Link from 'next/link'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMeta()
  if (!data) {
    return {}
  }

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    ),
    title: `${Title} - ${data.titleTemplate}`,
    description: data.description,
    alternates: {
      canonical: data.canonical
    },
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      title: data.ogTitle,
      description: data.ogDescription,
      siteName: data.titleTemplate,
      images: [data?.ogImage?.url || '']
    },
    twitter: {
      card: 'summary_large_image'
    }
  }
}

export default function Home() {
  return (
    <>
      <section className="text-white flex items-center justify-center overflow-hidden">
        <div className="mt-[40px] z-[3]">
          <h1 className="text-3xl font-bold"></h1>
          <p className=""></p>
        </div>
        <Image
          className="absolute top-0 right-0 h-[300px] bg-cover flex items-center justify-center z-[-3]"
          src="/hero.jpg"
          alt="MV"
          width={3600}
          height={1200}
          priority={true}
        />
      </section>
      <section className="relative bg-white w-[840px] mt-[140px] mr-[auto] ml-[auto] mb-0 pt-20 pb-20 pl-4 pr-4 rounded-[20px] max-md:mt-[140px] max-md:w-[calc(100%-32px)]">
        <div className="min-h-full">
          <Link href="https://zenn.dev/msk1206" target="_blank">
            <div className="inline-flex flex-col items-center justify-around p-[45px] border border-gray-300 rounded bg-black max-md:pt-[25px] max-md:pb-[25px] max-md:pr-[30px] max-md:pl-[30px]">
              <Image
                src={'/logo-only-white.svg'}
                alt={'Zenn tech blog'}
                className="p-3"
                width={60}
                height={60}
                priority
              />
              <span className="text-white font-bold sm:pr-2">Zenn Blog</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
