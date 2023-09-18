type Props = {
  tablContentsTtitle: string
}

export default function TableContents({ tablContentsTtitle }: Props) {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold pt-2 pb-2">{tablContentsTtitle}</h1>
        <span className="pt-2 pb-2 w-[100%]" aria-hidden={true}>
          <hr />
        </span>
      </div>
    </>
  )
}
