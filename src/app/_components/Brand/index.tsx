import Image from 'next/image'
import { MetaTitleTemplate as BlandName } from '@/app/_components/MetaTitles'

export default function Brand() {
  return (
    <div className="inline-flex items-center justify-between p-1">
      <Image
        src={'/mylogo.svg'}
        alt={`${BlandName} Logo`}
        className="h-10 w-auto"
        width={40}
        height={40}
        priority
      />
      <span className="">{BlandName}</span>
    </div>
  )
}
