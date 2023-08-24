import './globals.css'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
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
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
    title: data.titleTemplate,
    description: data.description,
    openGraph: {
      type: 'website',
      title: data.ogTitle,
      description: data.ogDescription,
      siteName: `${TitleTemplate}`,
      images: [data?.ogImage?.url || '']
    }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
