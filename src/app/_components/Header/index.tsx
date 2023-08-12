import Link from 'next/link'
import Brand from '@/app/_components/Brand'
import Menu from '@/app/_components/Menu'

export default function Header() {
  return (
    <header className="flex sticky items-center justify-between w-full bg-slate-500">
      <Link href={'/'}>
        <Brand />
      </Link>
      <Menu />
    </header>
  )
}
