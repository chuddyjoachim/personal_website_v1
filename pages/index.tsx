import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="chuddyjoachim" content="chuddyjoachim personal web site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>chuddyjochim personal website</h1>
    </div>
  )
}
