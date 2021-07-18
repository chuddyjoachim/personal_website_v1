import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React from 'react'
import ThemeContextProvider from '../context/ThemeContext'
import { AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ThemeContextProvider>
  )
}
export default MyApp
