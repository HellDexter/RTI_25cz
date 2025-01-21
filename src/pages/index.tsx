import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Contact from '../components/Contact'
import Specialization from '../components/Specialization'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Robotech Innovation</title>
        <meta name="description" content="Špičkové technologie pro automatizaci a robotizaci výroby" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <Products />
          <About />
          <Specialization />
          <Contact />
        </div>
      </main>
    </>
  )
}
