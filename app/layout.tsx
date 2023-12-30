import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header"
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Vikram Bhat | Software Engineer Portfolio",
  description: "Vikram is an experienced software \
              development manager proficient in full stack \
              development with a decade of industry expertise.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 first-letter first-letter
                      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem]
                       h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
                       sm:w[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] 
                        h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
                        sm:w[68.75rem] md:left-[-33rem] lg-left-[-28rem] 
                        xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position='top-right' />
          <Footer />
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  )
}
