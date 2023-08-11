import Image from 'next/image'

export default function Brand() {
  return (
    <div className="inline-flex items-center justify-between p-1">
      <Image
        src={'/mylogo.svg'}
        alt="BrandLogo"
        className="h-10 w-auto"
        width={40}
        height={40}
        priority
      />
      <span className="">Matsushita Web Design</span>
    </div>
  )
}
