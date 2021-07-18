import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React from 'react'
import ThemeContextProvider from '../context/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}
export default MyApp
