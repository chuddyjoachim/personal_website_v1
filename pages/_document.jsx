import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Joachim" />
          <meta name="chuddyjoachim" content="chuddyjoachim personal web site" />
          <link rel="apple-touch-icon" sizes="180x180" href="./favicon_io/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./tavicon_io/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./favicon_io/favicon-16x16.png" />
          <link rel="manifest" href="./site.webmanifest" />
          <meta
            data-react-helmet="true"
            property="og:title"
            content="chikezie joachim - chuddyjoachim"
          />
          <meta
            data-react-helmet="true"
            property="og:description"
            content="product designer and software developer in lagos nigeria more of a personal website, including social media contact links"
          />
          <meta property="og:url" content="https://www.chuddyjoachim.com/" />
          <meta
            property="og:image"
            content="https://www.chuddyjoachim.com/images/avatar/memoji-preview.png"
          />
          <meta data-react-helmet="true" property="og:type" content="website" />
          <meta data-react-helmet="true" property="twitter:card" content="summary" />
          <meta data-react-helmet="true" property="twitter:creator" content="@chuddyjoachim" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
