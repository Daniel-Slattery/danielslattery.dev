import { Container, Box, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="lightblue" p={3} mb={6} align="center">
        Hello, I am a full stack developer
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Daniel Slattery
          </Heading>
          <p>Tech enthusiast ( Developer / Trader )</p>
        </Box>
      </Box>
    </Container>
  )
}
