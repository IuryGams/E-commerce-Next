import Header from '@/components/Header'
import Slider from '@/components/Slider'
import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Store Next</title>
        <meta name="description" content="Simple Project E-commerce Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Slider />
        
      </main>
    </>
  )
}
