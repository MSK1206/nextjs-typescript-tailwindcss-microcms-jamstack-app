import Sheet from '@/app/_components/Sheet'
import Hero from '@/app/_components/Hero'
import {
  MetaTitleTemplate as TitleTemplate,
  MetaProfileTitle as Title
} from '@/app/_components/MetaTitles'

export const metadata = {
  title: `${Title} | ${TitleTemplate}`
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title={'Profile'} sub={'プロフィール'} />
      <Sheet>{children}</Sheet>
    </>
  )
}
