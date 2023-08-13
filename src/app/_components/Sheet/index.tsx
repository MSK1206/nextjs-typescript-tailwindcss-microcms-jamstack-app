type Props = {
  children: React.ReactNode
}

export default function Sheet({ children }: Props) {
  return (
    <div className="flex items-center justify-center bg-white w-[840px] m-[-40px,auto,0] p-20 rounded-[8px] max-sm:w-10/12 max-sm:p-[40px,auto] max-md:w-9/12">
      {children}
    </div>
  )
}
