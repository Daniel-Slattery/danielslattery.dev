import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Flex } from '@chakra-ui/react'
import Navbar from '../navbar'

const LaptopScene = dynamic(() => import('../LaptopScene'), {
  ssr: false,
  loading: () => <div>...Loading</div>
})

const Main = ({ children }) => {
  return (
    <Flex as="main" pb={8} direction="column">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daniel Slattery - Homepage</title>
      </Head>
      <Navbar />
      <Flex h={700} align="center" justify="center" bg="white" mt={10} mb={10}>
        <LaptopScene />
        {children}
      </Flex>
    </Flex>
  )
}

export default Main
