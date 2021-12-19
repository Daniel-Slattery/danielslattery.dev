import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <Layout router={router} />
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default MyApp
