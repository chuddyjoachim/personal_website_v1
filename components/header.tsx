import Head from 'next/head'
import Link from 'next/link'
import React, { FC, useContext } from 'react'
import { themeContext } from '../context/ThemeContext'
import { pagetype } from '../lib/types'
import DarkModeToggle from './DarkModeToggle'

interface PageTypeProp {
  page?: pagetype
}

const Header: FC<PageTypeProp> = ({ page }) => {
  const { theme, setThemeHandler } = useContext(themeContext)

  return (
    <>
      <Head>
        <title>Chikezie Joachim - chuddyjoachim</title>
        <meta name="chuddyjoachim" content="chuddyjoachim personal web site" />
        <link rel="apple-touch-icon" sizes="180x180" href="./favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./tavicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="./site.webmanifest" />
        <meta
          data-react-helmet="true"
          property="og:title"
          content="CHIKEZIE JOACHIM (chuddyjoachim)"
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="More of a personal website, including social media contact links"
        />
        <meta property="og:url" content="https://www.chuddyjoachim.com/" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/56943504?u=fbc9e93c2056539d0444bbec2933d48c6bf6dc0a&v=4"
        />
        <meta data-react-helmet="true" property="og:type" content="website" />
        <meta data-react-helmet="true" property="twitter:card" content="summary" />
        <meta data-react-helmet="true" property="twitter:creator" content="@chuddyjoachim" />
      </Head>
      <nav className="transition flex flex-row justify-center items-center sticky top-0 py-4 bg-white dark:bg-blueGray-900 text-gray-800 dark:text-gray-300">
        <ul className="flex flex-row justify-center items-center relative">
          <Link passHref={true} href="/">
            <li
              className={
                page == 'home'
                  ? 'font-semibold transition px-2 py-1 mx-1 uppercase text-green-600 dark:text-green-300 text-xs leading-6 tracking-widest cursor-pointer dark:border-gray-200 dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 text-center'
                  : 'font-semibold transition px-2 py-1 mx-1 uppercase dark:text-gray-300 text-xs leading-6 tracking-widest cursor-pointer dark:border-gray-200 dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 text-center'
              }
            >
              Intro
            </li>
          </Link>
         {/*  <Link passHref={true} href="/porfolio">
            <li
              className={
                page == 'portfolio'
                  ? 'font-semibold transition px-2 py-1 mx-1 uppercase text-green-600 dark:text-green-300 text-xs leading-6 tracking-widest cursor-pointer dark:border-gray-200 dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 text-center'
                  : 'font-semibold transition px-2 py-1 mx-1 uppercase dark:text-gray-300 text-xs leading-6 tracking-widest cursor-pointer dark:border-gray-200 dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 text-center'
              }
            >
              Portfolio
            </li>
          </Link> */}
        </ul>
      </nav>
      <div className="button-click w-8 h-8 md:w-16 md:h-16 shadow-inner border-gray-50 fixed top-4 right-4 cursor-pointer transition rounded-full dark:text-gray-300 z-10">
        {/* theme toggle goes here */}
        <DarkModeToggle theme={theme} onClick={setThemeHandler} />
      </div>
    </>
  )
}

export default Header
