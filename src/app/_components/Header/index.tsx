import Link from 'next/link'
import Brand from '@/app/_components/Brand'
import Menu from '@/app/_components/Menu'

export default function Header() {
  return (
    <header className="navbar">
      <Link href={'/'}>
        <div className="navbar-start">
          <Brand />
        </div>
      </Link>
      <div className="navbar-end">
        <Menu />
      </div>
    </header>
  )
}
