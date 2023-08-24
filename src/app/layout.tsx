import './globals.css'
import type { Metadata } from 'next'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import { getMeta } from '@/app/_libs/microcms'

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
      title: data.ogTitle,
      description: data.ogDescription,
      images: [data.ogImage?.url || '']
    },
    alternates: {
      canonical: data.canonical
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
