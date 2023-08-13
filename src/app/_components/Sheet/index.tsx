type Props = {
  children: React.ReactNode
}

export default function Sheet({ children }: Props) {
  return (
    <div className="relative bg-white w-[840px] m-[-40px,auto,0] p-20 rounded-[8px] max-sm:w-11/12 max-md:w-9/12">
      {children}
    </div>
  )
}