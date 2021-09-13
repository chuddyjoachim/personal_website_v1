import Head from 'next/head'
import Link from 'next/link'
import React, { useContext } from 'react'
import Icon from './icon'
import dynamic from 'next/dynamic'
import { themeContext } from '../context/ThemeContext'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './header'

const DarkModeToggle = dynamic(() => import('./DarkModeToggle'), { ssr: false })

const PageWrapper: React.FC = ({ children }) => {

  return (
    <>
    <Header page="home"/>
    <div>
      <div className="wrapper transition flex flex-col items-center justify-center w-screen min-h-screen bg-white dark:bg-blueGray-900 text-gray-800 dark:text-gray-300">
        <div className="inner_wrapper flex flex-col items-center justify-center w-11/12 md:w-2/3 w-min-24rem w-max-37">
          
          <motion.div
            layoutId="nav"
            className="button_wrapper flex flex-row justify-center items-center"
          >
            <Link passHref={true} href="/">
              <button className="button__ transition px-3 py-1 mx-2 uppercase w-24 text-xs leading-6 tracking-widest border dark:border-gray-200 border-gray-300 rounded-full dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 ">
                Home
              </button>
            </Link>
            <Link passHref={true} href="/about">
              <button className="button__ transition px-3 py-1 mx-2 uppercase w-24 text-xs leading-6 tracking-widest border dark:border-gray-200 border-gray-300 rounded-full dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 ">
                About
              </button>
            </Link>
            <Link passHref={true} href="/contact">
              <button className="button__ transition px-3 py-1 mx-2 uppercase w-24 text-xs leading-6 tracking-widest border dark:border-gray-200 border-gray-300 rounded-full dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 ">
                Contact
              </button>
            </Link>
          </motion.div>
          <motion.div
            layoutId="wrapper"
            className="inn_wrapper flex flex-col items-center justify-center w-full"
          >
            <span className="bar__ flex  border-t border-l border-r h-4 w-full  my-6 border-gray-300 dark:border-gray-400"></span>

            <AnimatePresence exitBeforeEnter> {children}</AnimatePresence>

            <span className="bar__ flex  border-b border-l border-r h-4 w-full  my-6 border-gray-300 dark:border-gray-400"></span>
          </motion.div>
          <motion.div
            layout
            layoutId="icon-wrapper"
            className="social_wrapper flex flex-row justify-center items-center h-11 border border-gray-50  bg-gray-50 dark:border-gray-400 dark:bg-blueGray-700 shadow-inner p-3 rounded-2xl"
          >
            <a
              href="https://www.github.com/chuddyjoachim"
              target="_blank"
              className="my-5 mx-2 text-gray-400 dark:text-gray-300 dark:hover:text-green-400 hover:text-green-500"
              rel="noreferrer"
            >
              <Icon name={'github'} />
            </a>
            <a
              href="https://www.linkedin.com/in/chuddyjoachim"
              target="_blank"
              className="my-5 mx-2 text-gray-400 dark:text-gray-300 dark:hover:text-green-400 hover:text-green-500"
              rel="noreferrer"
            >
              <Icon name={'linkedin'} />
            </a>
            <a
              href="https://www.dev.to/chuddyjoachim"
              target="_blank"
              className="my-5 mx-2 text-gray-400 dark:text-gray-300 dark:hover:text-green-400 hover:text-green-500"
              rel="noreferrer"
            >
              <Icon name={'dev'} />
            </a>
            <a
              href="http://www.twitter.com/chuddyjoachim"
              target="_blank"
              className="my-5 mx-2 text-gray-400 dark:text-gray-300 dark:hover:text-green-400 hover:text-green-500"
              rel="noreferrer"
            >
              <Icon name={'twitter'} />
            </a>
            <a
              href="http://www.dribbble.com/chuddyjoachim"
              target="_blank"
              className="my-5 mx-2 text-gray-400 dark:text-gray-300 dark:hover:text-green-400 hover:text-green-500"
              rel="noreferrer"
            >
              <Icon name={'dribble'} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PageWrapper
