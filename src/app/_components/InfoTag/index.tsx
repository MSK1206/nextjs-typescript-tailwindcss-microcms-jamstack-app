import { InfoTag } from '@/app/_libs/microcms'

type Props = {
  infotag: InfoTag
}

export default function InfoTag({ infotag }: Props) {
  return <span className="pt-1 pb-1 pr-2">{infotag.name}</span>
}
