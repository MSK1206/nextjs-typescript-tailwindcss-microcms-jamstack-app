import { Categories } from '@/app/_libs/microcms'
import { TagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = {
  category: Categories[]
}

export default function CategoryTest({ category }: Props) {
  return (
    <ul className="flex items-center">
      <TagIcon className="h-4 w-4 text-black" />
      {category.map((category) => (
        <Link href={`/category/${category.id}`} key={category.id}>
          <li className="flex items-center">
            <span className="text-xs border rounded-[8px] pt-1 pr-2 pb-1 pl-2 ml-1 whitespace-nowrap max-[796px]:text-[8px]">
              {category.name}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  )
}
