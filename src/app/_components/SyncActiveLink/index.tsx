'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  href: string
  linkLabel: string
  isOpen?: boolean
}

export default function ActiveLink({ href, linkLabel, isOpen }: Props) {
  const Pathname = usePathname()
  const isActive: boolean = Pathname === href

  const linkStyle = classNames(
    // 共通のスタイル
    'cursor-pointer',
    {
      // isActive = trueの場合のスタイル
      'text-gray-500': isActive,
      // isActive = false , isOpen = falseの場合尚且つ、isActive = false , isOpen = trueの場合のスタイル
      'text-white': (!isActive && !isOpen) || (!isActive && isOpen)
    }
  )

  return (
    <Link href={href}>
      <span className={linkStyle}>{linkLabel}</span>
    </Link>
  )
}
