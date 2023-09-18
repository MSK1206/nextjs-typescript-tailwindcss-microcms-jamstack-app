import Image from 'next/image'
import TableContents from '../_components/TableContents'
import Rating from '../_components/Rating'

export default function Page() {
  return (
    <section className="min-h-screen w-[50%] max-lg:w-[90%]">
      <div>
        <TableContents tablContentsTtitle={'About Me'} />
        <dl className="flex flex-wrap">
          <dt className="pt-5 pb-5">
            <Image
              src={'/mylogo.svg'}
              alt={'mylogo'}
              width={70}
              height={70}
              priority
            />
          </dt>
          <dd className="flex-col justify-center items-center p-5">
            <h1 className="text-xl font-bold">MSK1206</h1>
            <p className="text-[12px]">birth: 1989</p>
            <span className="text-[12px]">フロントエンドエンジニア</span>
          </dd>
        </dl>
        <p className="break-all">
          2021年から大阪でフロントエンドエンジニアとしてのキャリアがスタートしました。主にWebサイト制作に携っておりフロントエンドを最も得意とします。新しいテクノロジーやトレンドを追い求め、これまでの経験を通じて得た知識とスキルを活かして更なる成長と貢献を目指しています。
        </p>
        <TableContents tablContentsTtitle={'Skills'} />
        <br />
        <div className="grid sm:grid-cols-3 max-sm:grid-cols-2 gap-4">
          <div className="inline-flex items-center justify-center border border-gray-300 rounded">
            <Image
              src={'/HTML5.svg'}
              alt={'HTML5'}
              width={60}
              height={60}
              priority
            />
            <div className="p-1">
              <h2 className="font-bold sm:pr-2">HTML</h2>
              <Rating rating={5} />
            </div>
          </div>
          <div className="inline-flex items-center justify-center border border-gray-300 rounded">
            <Image
              src={'/CSS3.svg'}
              alt={'CSS3'}
              width={60}
              height={60}
              priority
            />
            <div className="p-1">
              <h2 className="font-bold sm:pr-2">CSS</h2>
              <Rating rating={5} />
            </div>
          </div>
          <div className="inline-flex items-center justify-center border border-gray-300 rounded">
            <Image
              src={'/JavaScript.svg'}
              alt={'JavaScript'}
              width={60}
              height={60}
              priority
            />
            <div className="p-1">
              <h2 className="font-bold sm:pr-2">JavaScript</h2>
              <Rating rating={4} />
            </div>
          </div>
          <div className="inline-flex items-center justify-center border border-gray-300 rounded">
            <Image
              src={'/TypeScript.svg'}
              alt={'TypeScript'}
              width={60}
              height={60}
              priority
            />
            <div className="p-1">
              <h2 className="font-bold sm:pr-2">TypeScript</h2>
              <Rating rating={4} />
            </div>
          </div>
          <div className="inline-flex items-center justify-center border border-gray-300 rounded">
            <Image
              src={'/Nextjs.svg'}
              alt={'Next.js'}
              width={60}
              height={60}
              priority
            />
            <div className="p-1">
              <h2 className="font-bold sm:pr-2">Next.js</h2>
              <Rating rating={5} />
            </div>
          </div>
          <div className="inline-flex items-center justify-center border border-gray-300 rounded">
            <Image
              src={'/Python.svg'}
              alt={'Python'}
              width={60}
              height={60}
              priority
            />
            <div className="p-1">
              <h2 className="font-bold sm:pr-2">Python</h2>
              <Rating rating={3} />
            </div>
          </div>
          <div className="inline-flex items-center justify-center border border-gray-300 rounded">
            <Image
              src={'/Angular.svg'}
              alt={'Angular'}
              width={60}
              height={60}
              priority
            />
            <div className="p-1">
              <h2 className="font-bold sm:pr-2">Angular</h2>
              <Rating rating={3} />
            </div>
          </div>
          <div className="inline-flex items-center justify-center border border-gray-300 rounded">
            <Image
              src={'/Rails.svg'}
              alt={'Rails'}
              width={60}
              height={60}
              priority
            />
            <div className="p-1">
              <h2 className="font-bold sm:pr-2">Rails</h2>
              <Rating rating={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
