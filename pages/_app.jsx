import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider >
      <Layout router={router} />
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default MyApp
