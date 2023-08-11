import Link from 'next/link'

export default function Menu() {
  return (
    <div>
      <nav>
        <Link href={'/dynamic'}>Blog</Link>
      </nav>
    </div>
  )
}
