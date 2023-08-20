'use client'
import { useEffect } from 'react'
import styles from './index.module.css'

export default function Formrun() {
  const FormrunID: string = `${process.env.NEXT_PUBLIC_FORMRUN_FORM_ID}`
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
