import { Container, Box, Heading, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="lightblue" p={3} mb={6} align="center">
        Hello, I am a full stack developer based in London!
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Daniel Slattery
          </Heading>
          <p>Tech enthusiast ( Developer / Trader )</p>
        </Box>
      <Image src='/images/snowboard-pic.jpg' borderRadius='full' boxSize='150px' fit='cover' object-position='top' />
      </Box>
    </Container>
  )
}
