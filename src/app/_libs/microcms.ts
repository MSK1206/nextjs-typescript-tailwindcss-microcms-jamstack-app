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
  description: string
  content: string
  thumbnail?: MicroCMSImage
  category: Categories[]
  infotag: InfoTag
} & MicroCMSDate

// カテゴリーの型定義
export type Categories = {
  name: string
} & MicroCMSContentId &
  MicroCMSDate

// インフォメーションタグの定義
export type InfoTag = {
  name: string
} & MicroCMSContentId &
  MicroCMSDate

export type Blogs = Blog & MicroCMSContentId & MicroCMSDate

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
  return listData
}

// ブログの詳細を取得
export const getBlogDetail = async (
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
  return detailData
}
