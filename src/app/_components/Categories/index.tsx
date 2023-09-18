import { Categories } from '@/app/_libs/microcms'
import { TagIcon } from '@heroicons/react/24/outline'

type Props = {
  category: Categories[]
}

export default function Category({ category }: Props) {
  return (
    <ul className="flex items-center">
      <TagIcon className="h-4 w-4 text-black" />
      {category.map((category) => (
        <li className="flex items-center" key={category.id}>
          <span className="text-xs border rounded-[8px] pt-1 pr-2 pb-1 pl-2 ml-1 whitespace-nowrap max-[796px]:text-[8px]">
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  )
}
