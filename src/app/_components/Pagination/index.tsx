import { BLOG_LIST_LIMIT } from '@/app/_constants'
import Link from 'next/link'

type Props = {
  totalCount: number
}

export default function Pagination({ totalCount }: Props) {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  return (
    <>
      <div className="join">
        <ul>
          {range(1, Math.ceil(totalCount / BLOG_LIST_LIMIT)).map(
            (number, index) => (
              <li key={index}>
                <Link href={`/blog/page/${number}`}>
                  <button className="join-item btn">{number}</button>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  )
}
