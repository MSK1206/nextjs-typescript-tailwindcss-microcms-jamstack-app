'use client'
import { useEffect } from 'react'
import Formrun from '@/app/_components/Formrun'

export default function Page() {
  useEffect(() => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement
    const scriptUrl = document.createElement('script')
    scriptUrl.src = 'https://sdk.form.run/js/v2/embed.js'
    head.appendChild(scriptUrl)
    return () => {
      // コンポーネントがアンマウントされる際にHeadからスクリプトのクリーンアップを行う
      head.removeChild(scriptUrl)
    }
  }, [])
  return (
    <div className="min-h-screen z-[10]">
      <Formrun />
    </div>
  )
}
