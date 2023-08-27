'use client'
import SyncActiveLink from '../SyncActiveLink'
import { useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import cx from 'classnames'
import styles from './index.module.css'

type MenuItem = {
  label: string
  link: string
}

const menuItems: MenuItem[] = [
  { label: 'Home', link: '/' },
  { label: 'Blog', link: '/blog' },
  { label: 'Profile', link: '/profile' },
  { label: 'Contact', link: '/contact' }
]

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          {menuItems.map((item) => (
            <li key={item.label} onClick={closeMenu}>
              <SyncActiveLink
                href={item.link}
                linkLabel={item.label}
                isOpen={isOpen}
              />
            </li>
          ))}
        </ul>
        <button
          name="button"
          type="button"
          className={cx(styles.button, styles.close)}
          onClick={closeMenu}
        >
          <XMarkIcon className="w-8 h-8 text-white" />
        </button>
      </nav>
      <button
        name="button"
        type="button"
        className={styles.button}
        onClick={openMenu}
      >
        <Bars3BottomRightIcon className="w-8 h-8 text-white" />
      </button>
    </div>
  )
}
