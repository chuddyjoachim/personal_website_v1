import Head from 'next/head'
import React from 'react'
import Header from '../components/core/home/Header'
import DefaultLayout from '../components/shared/layout/DefaultLayout'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Joachim • home</title>
      </Head>
      <Header />
    </>
  )
}
Home.Layout = DefaultLayout

export default Home
