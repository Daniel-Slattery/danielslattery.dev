import { Container, Box, Heading, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="lightblue" p={3} mb={6} align="center">
        Hello, I am a full stack developer based in London!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Slattery
          </Heading>
          <p>Tech enthusiast ( Developer / Trader )</p>
        </Box>
        <Image
          alt="SnowboarderDan"
          src="/images/snowboard-pic.jpg"
          borderRadius="full"
          boxSize="150px"
          fit="cover"
          object-position="top"
        />
      </Box>
      <Box>
        <Heading as="h3">Work</Heading>
        <p>
          Greetings from London! I am an enterprising Front-End Developer
          working with a premier UK retail brand, where I bring complex digital
          experiences to life. My professional journey is quite unique; it began
          in the intricate world of biomedical engineering. This initial career
          honed my analytical skills and introduced me to the transformative
          power of technology in solving real-world problems. It wasn't long
          before my fascination with automating trading strategies led me down
          the path of coding—a path that revealed my passion for the dynamic
          React and Next.js ecosystems. Today, I combine my background in
          engineering with a deep expertise in web development to deliver
          innovative, user-centered solutions. My mission is to create seamless,
          intuitive, and scalable web applications that enhance user interaction
          and engagement, whilst continuously exploring the frontiers of digital
          innovation.
        </p>
      </Box>
    </Container>
  )
}
