import { Categories } from '@/app/_libs/microcms'

type Props = {
  category: Categories[]
}

export default function Category({ category }: Props) {
  return (
    <>
      {category.map((category) => (
        <li
          className="inline-flex items-center justify-between"
          key={category.id}
        >
          <span className="pr-1 pl-1">{category.name}</span>
        </li>
      ))}
    </>
  )
}
