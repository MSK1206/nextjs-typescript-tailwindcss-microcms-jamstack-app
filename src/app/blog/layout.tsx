import Sheet from '@/app/_components/Sheet'
import {
  MetaTitleTemplate as TitleTemplate,
  MetaDynamicTitle as Title
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
      <Sheet>{children}</Sheet>
    </>
  )
}
