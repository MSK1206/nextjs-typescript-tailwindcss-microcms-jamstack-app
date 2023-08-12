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
          <span className="pt-1 pb-1 pr-3 pl-3">{category.name}</span>
        </li>
      ))}
    </>
  )
}
