'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import cx from 'classnames'
import styles from './index.module.css'

interface MenuItem {
  label: string
  link: string
}

const menuItems: MenuItem[] = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Blogs', link: '/blog' },
  { label: 'Contact', link: '/contact' }
]

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen)
  }
  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          {menuItems.map((item) => (
            <li className="menu-item" key={item.label}>
              <Link href={item.link} onClick={toggleMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          name="button"
          type="button"
          className={cx(styles.button, styles.close)}
          onClick={toggleMenu}
        >
          <XMarkIcon className="w-8 h-8 text-white" />
        </button>
      </nav>
      <button
        name="button"
        type="button"
        className={styles.button}
        onClick={toggleMenu}
      >
        <Bars3BottomRightIcon className="w-8 h-8 text-black" />
      </button>
    </div>
  )
}
