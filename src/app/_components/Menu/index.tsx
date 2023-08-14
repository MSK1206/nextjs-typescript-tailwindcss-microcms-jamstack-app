import Link from 'next/link'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Menu() {
  return (
    <>
      <div className="dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle swap swap-rotate"
        >
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <Bars3BottomRightIcon className="swap-off fill-current w-8 h-8 text-black" />
          {/* close icon */}
          <XMarkIcon className="swap-on fill-current w-8 h-8 text-black" />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blogs</Link>
          </li>
          <li>
            <Link href={'/Contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
