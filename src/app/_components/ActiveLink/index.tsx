'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  href: string
  linkLabel: string
  isOpen?: boolean
  closeMenu?: () => void
}

export default function ActiveLink({
  href,
  linkLabel,
  isOpen,
  closeMenu
}: Props) {
  const Pathname = usePathname()
  const isActive: boolean = Pathname === href

  const linkStyle = classNames(
    // 共通のスタイル
    'cursor-pointer text-center p-2 w-[80px] max-sm:mt-5 max-sm:first:mt-0 max-sm:last:pr-4 max-[796px]:text-start',
    {
      // isActive = trueの場合のスタイル
      'text-gray-500': isActive,
      // isActive = false , isOpen = falseの場合尚且つ、isActive = false , isOpen = trueの場合のスタイル
      'text-white': (!isActive && !isOpen) || (!isActive && isOpen)
    }
  )
  const handleClick = () => {
    closeMenu?.() // メニューを閉じる
  }
  return (
    <Link href={href} onClick={handleClick}>
      <li className={linkStyle}>{linkLabel}</li>
    </Link>
  )
}
