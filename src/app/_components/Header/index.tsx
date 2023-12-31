import Link from 'next/link'
import Brand from '@/app/_components/Brand'
import Menu from '@/app/_components/Menu'

export default function Header() {
  return (
    <header className="navbar sticky pl-5 pr-5 z-[2]">
      <div className="navbar-start">
        <Link href={'/'}>
          <Brand />
        </Link>
      </div>
      <div className="navbar-end">
        <Menu />
      </div>
    </header>
  )
}
