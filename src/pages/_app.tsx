import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { Montserrat } from 'next/font/google'
import { appWithTranslation, WithTranslation } from 'next-i18next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'react-hot-toast'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
})

function App({ Component, pageProps }: AppProps & WithTranslation) {
  return (
    <main className={`${montserrat.className}`}>
      <Navbar />
      <Component {...pageProps} />
      <ScrollToTop />
      <Footer />
      <Analytics />
      <SpeedInsights />
      <Toaster position="bottom-right" />
    </main>
  )
}

export default appWithTranslation(App)
