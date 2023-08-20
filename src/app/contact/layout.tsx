import Sheet from '@/app/_components/Sheet'
import Hero from '@/app/_components/Hero'
import {
  MetaTitleTemplate as TitleTemplate,
  MetaContactTitle as Title
} from '@/app/_components/MetaTitles'
import Script from 'next/script'

export const metadata = {
  title: `${Title} | ${TitleTemplate}`
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Script
        async
        defer
        type="text/javascript"
        src="https://sdk.form.run/js/v2/embed.js"
      />
      <Hero title={'Contact'} sub={'お問い合わせ'} />
      <Sheet>{children}</Sheet>
    </>
  )
}
