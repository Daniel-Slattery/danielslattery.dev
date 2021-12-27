import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import Navbar from '../navbar'
import TextCanvasLoader from '../TextCanvas'


const TextCanvas = dynamic(() => import('../TextCanvas'), {
  ssr: false,
  loading: () => <TextCanvasLoader />
})

const Main = ({children}) => {
  return (
    <Flex as="main" pb={8} direction='column'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daniel Slattery - Homepage</title>
      </Head>
      <Navbar  />
      <Flex h={400} align="center" justify="center" bg="lightblue" m={100}>
        <TextCanvas />
        {children}
      </Flex>

    </Flex>
  )
}

export default Main
