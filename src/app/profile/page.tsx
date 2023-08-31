import Image from 'next/image'

export default function Page() {
  return (
    <section className="min-h-screen w-[50%] max-lg:w-[90%]">
      <div>
        <dl>
          <dt className="text-2xl pt-2 pb-2">About Me</dt>
          <dd className="pt-2 pb-2 w-[100%]">
            <hr />
          </dd>
        </dl>
        <dl className="flex flex-wrap">
          <dt className="pt-5 pb-5">
            <Image
              src={'/mylogo.svg'}
              alt={'mylogo'}
              width={70}
              height={70}
              priority={true}
            />
          </dt>
          <dd className="flex-col justify-center items-center p-5">
            <h1 className="text-xl">MSK1206</h1>
            <p className="text-[12px]">birth: 1989</p>
            <span className="text-[12px]">フロントエンドエンジニア</span>
          </dd>
        </dl>
        <p>
          2021年に大阪でフロントエンドエンジニアとしてのキャリアがスタートしました。主にWebサイト制作の業務に携わりました。新しいテクノロジーやトレンドを追い求め、これまでの経験を通じて得た知識とスキルを活かして更なる成長と貢献を目指しています。
        </p>
      </div>
    </section>
  )
}
