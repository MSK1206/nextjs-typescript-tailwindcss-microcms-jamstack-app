import Image from 'next/image'
import { Metadata } from 'next';
import { getMeta } from '@/app/_libs/microcms'
import { MetaTitleTemplate as TitleTemplate } from '@/app/_components/MetaTitles'

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMeta()
  if (!data) {
    return {}
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    title: data.titleTemplate,
    description: data.description,
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
          alt=""
          width={3600}
          height={1200}
          priority
        />
      </section>
      <section className="mt-[170px] p-[200px] max-sm:p-[40px] max-sm:mt-[50px]">
        <div className="mt-[40px]">
          <h2></h2>
          <p></p>
        </div>
      </section>
    </>
  )
}
