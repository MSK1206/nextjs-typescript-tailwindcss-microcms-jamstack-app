'use client'
import { useEffect } from 'react'
import styles from './index.module.css'

export default function Formrun() {
  const FormrunID: string = `${process.env.NEXT_PUBLIC_FORMRUN_FORM_ID}`
  const preconnectLink = document.createElement('link')
  preconnectLink.rel = 'preconnect'
  preconnectLink.href = 'https://sdk.form.run/js/v2/embed.js'
  // <Head>に<link>を追加してサーバーに事前に接続
  document.head.appendChild(preconnectLink)
  useEffect(() => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement
    const scriptUrl = document.createElement('script')
    scriptUrl.src = 'https://sdk.form.run/js/v2/embed.js'
    scriptUrl.async = true // 非同期読み込みを有効
    head.appendChild(scriptUrl)
    return () => {
      // コンポーネントがアンマウントされる際にHeadからスクリプトのクリーンアップを行う
      head.removeChild(scriptUrl)
    }
  }, [])
  return (
    <>
      <div className={styles.formrun_screen}>
        <div
          className="formrun-embed"
          data-formrun-form={FormrunID}
          data-formrun-redirect="true"
        />
      </div>
    </>
  )
}
