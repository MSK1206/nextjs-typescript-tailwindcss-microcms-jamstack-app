import Link from 'next/link'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Menu() {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle swap swap-rotate"
          >
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />
            <Bars3BottomRightIcon className="swap-off w-8 h-8 text-black" />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <XMarkIcon className="swap-on w-8 h-8 text-black absolute top-1 right-1" />
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/blog'}>Blog</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
