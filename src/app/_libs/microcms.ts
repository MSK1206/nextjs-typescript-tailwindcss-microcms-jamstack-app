import { createClient } from 'microcms-js-sdk'
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId
} from 'microcms-js-sdk'
import { notFound } from 'next/navigation'

// ブログの型定義
export type Blog = {
  id: string
  title: string
  content: string
  thumbnail?: MicroCMSImage
  category: Categories
} & MicroCMSDate

// カテゴリーの型定義
export type Categories = {
  name: string
} & MicroCMSContentId &
  MicroCMSDate

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
  // APIエラーが返却されると自動的にリトライを実行 ※最大2回
  retry: true
})

// ブログ一覧を取得
export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Blog>({
      endpoint: 'blogs',
      queries
    })
    .catch(notFound)
  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return listData
}

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Blog>({
      endpoint: 'blogs',
      contentId,
      queries
    })
    .catch(notFound)
  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return detailData
}

// カテゴリーの一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Categories>({
      endpoint: 'categories',
      queries
    })
    .catch(notFound)
  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return listData
}

// カテゴリーの詳細を取得
export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Categories>({
      endpoint: 'categories',
      contentId,
      queries
    })
    .catch(notFound)
  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return detailData
}
