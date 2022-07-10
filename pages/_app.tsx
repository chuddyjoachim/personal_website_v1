import 'tailwindcss/tailwind.css'
import '../styles/tailwind.css'
import React from 'react'
import ThemeContextProvider from '../context/ThemeContext'
import PTabContextProvider from '../context/portfolioTabContext'
import { AnimateSharedLayout } from 'framer-motion'
import { MyAppProps } from '../lib/pageLayout'

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeContextProvider>
      <PTabContextProvider>
        <AnimateSharedLayout>
          {Component.Layout ? (
            <Component.Layout>
              <Component {...pageProps} />
            </Component.Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </AnimateSharedLayout>
      </PTabContextProvider>
    </ThemeContextProvider>
  )
}
export default MyApp
