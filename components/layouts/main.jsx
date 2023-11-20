import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Navbar from '../Navbar'

const Main = ({ children }) => {
  return (
    <Flex as="main" direction="column" height="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daniel Slattery - Homepage</title>
      </Head>
      <Navbar />
      {children}
    </Flex>
  )
}

export default Main
