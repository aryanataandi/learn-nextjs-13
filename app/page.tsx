import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="m-auto px-24">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Learn <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Next JS 13</span>.</h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Jangan lupa belajar 😊</p>
        </div>
      </div>
    </>
  )
}
