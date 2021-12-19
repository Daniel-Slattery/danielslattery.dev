import Head from 'next/head'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import Navbar from '../navbar'
import { Router } from 'next/dist/client/router'

const Main = () => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daniel Slattery - Homepage</title>
      </Head>

      <Navbar path={Router.asPath} />

      <Container maxW="container.md" pt={14} bg='orange'/>

      <Flex h={300} align="center" justify="center" bg="lightblue" m={100}>
        <Heading>3D Content Place Holder</Heading>
      </Flex>

    </Box>
  )
}

export default Main
