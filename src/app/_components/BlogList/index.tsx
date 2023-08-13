import { Blogs } from '@/app/_libs/microcms'
import BlogListItem from '@/app/_components/BlogListItem'

type Props = {
  articles?: Blogs[]
}

export default function BlogList({ articles }: Props) {
  if (!articles) {
    return null
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>
  }
  return (
    <ul>
      {articles.map((article) => (
        <BlogListItem key={article.id} blogs={article} />
      ))}
    </ul>
  )
}
