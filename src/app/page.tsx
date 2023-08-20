import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="text-white flex items-center justify-center overflow-hidden">
        <div className="mt-[40px]">
          <h1 className="text-3xl font-bold"></h1>
          <p className=""></p>
        </div>
        <Image
          className="absolute top-0 right-0 h-[300px] bg-cover flex items-center justify-center z-[-3]"
          src="/hero.jpg"
          alt=""
          width={3600}
          height={1200}
          priority
        />
      </section>
      <section className="mt-[170px] p-[200px] max-sm:p-[40px] max-sm:mt-[50px]">
        <div className="">
          <h2></h2>
          <p></p>
        </div>
      </section>
    </>
  )
}
