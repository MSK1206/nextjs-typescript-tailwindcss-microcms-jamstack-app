import Hero from '@/app/_components/Hero'

export default function NotFound() {
  return (
    <>
      <Hero title={'404'} sub={'Not Found'} />
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="font-bold text-2xl" role="alert">
          ページが見つかりませんでした。
        </h1>
      </div>
    </>
  )
}
