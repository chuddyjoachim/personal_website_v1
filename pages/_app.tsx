import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React from 'react'
import ThemeContextProvider from '../context/ThemeContext'
import PTabContextProvider from '../context/portfolioTabContext'
import { AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <PTabContextProvider>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
      </PTabContextProvider>
    </ThemeContextProvider>
  )
}
export default MyApp
