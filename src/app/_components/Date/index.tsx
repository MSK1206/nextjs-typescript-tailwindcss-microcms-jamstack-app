import { formatDate } from '@/app/_libs/dayjsDate'
import Image from 'next/image'

type Props = {
  date: string
}

export default function PublishedDate({ date }: Props) {
  return (
    <span className="inline-flex items-center justify-around">
      <Image src="/mylogo.svg" alt="clock" width={16} height={16} priority />
      {formatDate(date)}
    </span>
  )
}
