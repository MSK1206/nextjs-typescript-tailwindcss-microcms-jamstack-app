'use client'
import { useEffect } from 'react'
import styles from './index.module.css'

export default function Formrun() {
  const FormrunID: string = `${process.env.NEXT_PUBLIC_FORMRUN_FORM_ID}`
  const FormrunURL: string = `${process.env.NEXT_PUBLIC_FORMRUN_FORM_URL}`
  useEffect(() => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement
    const scriptUrl = document.createElement('script')
    scriptUrl.src = FormrunURL
    head.appendChild(scriptUrl)
    return () => {
      // コンポーネントがアンマウントされる際にHeadからスクリプトのクリーンアップを行う
      head.removeChild(scriptUrl)
    }
  }, [FormrunURL])
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
