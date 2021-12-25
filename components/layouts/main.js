import Head from 'next/head'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import Navbar from '../navbar'
import TextCanvas from '../TextCanvas'

const Main = () => {
  return (
    <Flex as="main" pb={8} direction='column'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daniel Slattery - Homepage</title>
      </Head>
      <Navbar  />
      <Flex h={400} align="center" justify="center" bg="lightblue" m={100}>
        <Heading>3D Content Place Holder</Heading>
        <TextCanvas />
      </Flex>

    </Flex>
  )
}

export default Main
