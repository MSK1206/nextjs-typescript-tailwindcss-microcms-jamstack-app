import { BLOG_LIST_LIMIT } from '@/app/_constants'
import Link from 'next/link'

type Props = {
  totalCount: number
  current?: number
  basePath?: string
  q?: string
}

export default function Pagination({
  totalCount,
  current = 1,
  basePath = '',
  q
}: Props) {
  const pages = Array.from({
    length: Math.ceil(totalCount / BLOG_LIST_LIMIT)
  }).map((_, i) => i + 1)
  return (
    <ul className="flex items-center justify-center text-2xl">
      {pages.map((p) => (
        <li key={p}>
          {current !== p ? (
            <Link href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}>{p}</Link>
          ) : (
            <span>{p}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
