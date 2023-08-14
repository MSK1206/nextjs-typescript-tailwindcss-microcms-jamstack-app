import Link from 'next/link'

const MenuItems = ['Home', 'Blog', 'Contact']

export default function Menu() {
  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle"></label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {MenuItems.map((string) => (
            <li key={string}>
              <Link href={`/${string.toLowerCase()}`}>{string}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
