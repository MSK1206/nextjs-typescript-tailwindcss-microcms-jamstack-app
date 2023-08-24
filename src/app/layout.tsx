import './globals.css'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" prefix=og: http://ogp.me/ns#>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
