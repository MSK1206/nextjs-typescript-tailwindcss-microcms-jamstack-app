import Link from 'next/link'

export default function Menu() {
  return (
    <div>
      <nav>
        <Link href={'/blog'}>Blog</Link>
      </nav>
    </div>
  )
}
